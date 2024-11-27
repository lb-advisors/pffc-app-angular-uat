import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Company } from 'src/app/models/company.model';
import { Customer } from 'src/app/models/customer.model';
import { SalesRep } from 'src/app/models/sales-rep.model';
import { OrderLinksService } from 'src/app/services/order-links.service';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  standalone: true,
  selector: 'app-order-links',
  templateUrl: './order-links.component.html',
  styleUrls: ['./order-links.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderLinksComponent implements OnInit {
  form!: FormGroup;
  companies$!: Observable<Company[]>;
  salesPersons$!: Observable<SalesRep[]>;
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private snackbarService: SnackbarService,
    private orderLinksService: OrderLinksService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      searchText: '',
    });

    // Load companies and set default to 'PFF'
    this.companies$ = this.orderLinksService.getCompanies().pipe(
      tap((companies) => {
        const defaultCompany = companies.find((company) => company.name === 'PFF');
        if (defaultCompany) {
          this.form.get('company')!.setValue(defaultCompany);
        }
      }),
    );

    // Load salespersons based on selected company
    this.form
      .get('company')!
      .valueChanges.pipe(
        switchMap((company) =>
          this.orderLinksService.getSalesPersons(company.id).pipe(
            tap((salesreps) => {
              salesreps.sort((a, b) => a.name.localeCompare(b.name));
              this.salesPersons$ = new Observable<SalesRep[]>((observer) => {
                observer.next(salesreps);
                observer.complete();
              });
              if (salesreps.length > 0) {
                this.form.get('salesPerson')!.setValue(salesreps[0]);
              }
            }),
          ),
        ),
      )
      .subscribe();

    // Load customers based on selected salesperson
    this.form
      .get('salesPerson')!
      .valueChanges.pipe(
        switchMap((salesrep) => {
          const company = this.form.get('company')!.value;
          return this.orderLinksService.getCustomers(company.id, salesrep.name);
        }),
      )
      .subscribe({
        next: (customers) => {
          this.customers = [...customers];
          this.customers.sort((a, b) => a.name.localeCompare(b.name));
          this.filteredCustomers = [...this.customers];
          this.cdr.markForCheck();
        },
      });

    // Apply search filter on customer names
    this.form.get('searchText')!.valueChanges.subscribe((searchText: string) => {
      this.filteredCustomers = this.customers.filter((customer) => customer.name.toLowerCase().includes(searchText.toLowerCase()));
    });
  }

  // Generate Order Link
  generateLink(customerId: number): string {
    const baseUrl = window.location.href.replace('/order-links', '');
    return `${baseUrl}/customer/${customerId}/order-form`;
  }

  // Copy Order Link to Clipboard
  copyLink(customerId: number): void {
    const link = this.generateLink(customerId);
    navigator.clipboard
      .writeText(link)
      .then(() => {
        this.snackbarService.showSuccess('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy link: ', err);
      });
  }
}
