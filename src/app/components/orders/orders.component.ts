import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Company } from 'src/app/models/company.model';
import { SalesRep } from 'src/app/models/sales-rep.model';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { OrderDetailsDialogComponent } from 'src/app/components/order-details-dialog/order-details-dialog.component';
import { OrderService } from 'src/app/services/order.services';
import { Order } from 'src/app/models/order.model';

@Component({
  standalone: true,
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  form!: FormGroup;
  companies$!: Observable<Company[]>;
  salesPersons$!: Observable<SalesRep[]>;
  orders: Order[] = [];
  filteredOrders: Order[] = [];

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private snackbarService: SnackbarService,
    private orderService: OrderService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      company: [],
      salesPerson: [],
      customerName: [''],
    });

    this.loadCompanies();
    this.setupSalesPersonListener();
    this.setupOrdersListener();
    this.setupCustomerNameFilterListener();
  }

  private loadCompanies(): void {
    this.companies$ = this.orderService.loadCompanies().pipe(
      tap((companies) => {
        if (companies && companies.length > 0) {
          this.form.get('company')!.setValue(companies[0]);
        }
      }),
    );
  }

  private setupSalesPersonListener(): void {
    this.form
      .get('company')!
      .valueChanges.pipe(
        switchMap((company: Company) => {
          return this.orderService.loadSalesRep(company.id);
        }),
        tap((salesreps) => {
          this.salesPersons$ = new Observable<SalesRep[]>((observer) => {
            observer.next(salesreps);
            observer.complete();
          });

          if (salesreps && salesreps.length > 0) {
            this.form.get('salesPerson')!.setValue(salesreps[0]);
          }

          this.loadOrders();
        }),
      )
      .subscribe({
        error: (error) => {
          console.error('Failed to load sales reps:', error);
          this.snackbarService.showError('Failed to load sales reps.');
        },
      });
  }

  private setupOrdersListener(): void {
    this.form.get('salesPerson')!.valueChanges.subscribe(() => {
      this.loadOrders();
    });
  }

  private loadOrders(): void {
    const company = this.form.get('company')!.value;
    const salesrep = this.form.get('salesPerson')!.value;

    if (!company || !salesrep) {
      return;
    }
    this.orderService.loadOrders(company.id, salesrep.name, 72).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.applyFilters();
      },
      error: (error) => {
        console.error('Failed to load orders:', error);
        this.snackbarService.showError('Failed to load orders.');
      },
    });
  }

  private setupCustomerNameFilterListener(): void {
    this.form.get('customerName')!.valueChanges.subscribe(() => this.applyFilters());
  }

  private applyFilters(): void {
    const customerName = this.form.get('customerName')!.value?.toLowerCase() || '';
    this.filteredOrders = this.orders.filter((order) => order.customerName.toLowerCase().includes(customerName));
    this.cdr.markForCheck();
  }

  onRowClick(order: Order): void {
    this.dialog.open(OrderDetailsDialogComponent, {
      data: order,
      width: '800px',
    });
  }
}
