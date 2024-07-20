import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { OrderForm } from 'src/app/models/order-form.model';

@Component({
  standalone: true,
  selector: 'app-order-exists',
  templateUrl: './order-exists.component.html',
  styleUrls: ['./order-exists.component.css'],
  imports: [CommonModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderExistsComponent implements OnInit {
  orderData!: OrderForm;
  companyId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.orderData = history.state['order']; // Access the passed data here
    this.companyId = history.state['companyId'];
  }

  goBack(): void {
    window.history.back();
  }
}
