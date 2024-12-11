import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { map, Observable } from 'rxjs';
import { OrderService } from '../services/order.services';
import { ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-per-day-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './sales-per-day-chart.component.html',
  styleUrl: './sales-per-day-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesPerDayChartComponent implements OnInit, OnChanges {
  @Input() pastMonths: number = 3;

  public chartData$?: Observable<{
    labels: string[];
    datasets: { data: number[]; label: string }[];
  }>;

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },

    plugins: {
      legend: {
        display: false, // Disable the legend
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
    this.chartData$ = this.orderService.getTotalAmountPerDay(pastMonths).pipe(
      map((data) => ({
        labels: data.map((entry) => this.convertDateFormat(entry.date)),
        datasets: [
          {
            data: data.map((entry) => entry.totalAmount),
            label: 'Total Sales ($)',
          },
        ],
      })),
    );
  }

  private convertDateFormat(dateString: string): string {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      return `${month}/${day}/${year}`;
    }
    return '';
  }
}
