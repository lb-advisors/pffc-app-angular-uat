import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { OrderService } from '../services/order.services';
import { Observable, tap } from 'rxjs';
import { TotalAmountPerCustomer } from '../models/total-amoount-per-customer.model';

@Component({
  selector: 'app-sales-per-customer-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './sales-per-customer-chart.component.html',
  styleUrl: './sales-per-customer-chart.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SalesPerSalesRepCustomerComponent implements OnInit, OnChanges {
  @Input() pastMonths: number = 3;

  public chartData$?: Observable<TotalAmountPerCustomer[]>;

  public pieChartLabels: string[] = [];
  public pieChartDatasets: { data: number[] }[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchChartData(this.pastMonths);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pastMonths']) {
      this.fetchChartData(this.pastMonths);
    }
  }

  fetchChartData(pastMonths: number): void {
    this.chartData$ = this.orderService.getTotalAmountPerCustomer(pastMonths).pipe(
      tap((data) => {
        this.pieChartLabels = data.map((item) => item.customerName);
        this.pieChartDatasets = [{ data: data.map((item) => item.totalAmount) }];
      }),
    );
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Positions the legend at the bottom
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw as number; // The raw data value
            return ` $${value.toLocaleString()}`; // Format with $ sign and thousands separator
          },
        },
      },
    },
  };
  /*
  public pieChartLabels = ['Download', 'In', 'Mail Sales'];
  public pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  */
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
