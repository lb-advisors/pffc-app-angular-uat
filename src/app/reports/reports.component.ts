import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { LogoComponent } from '../components/logo/logo.component';
import { map, Observable } from 'rxjs';
import { OrderService } from '../services/order.services';
import { CommonModule } from '@angular/common';
import { SalesPerDayChartComponent } from '../sales-per-day-chart/sales-per-day-chart.component';
import { SalesPerSalesRepChartComponent } from '../sales-per-sales-rep-chart/sales-per-sales-rep-chart.component';
import { SalesPerSalesRepCustomerComponent } from '../sales-per-customer/sales-per-customer-chart.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterModule, CommonModule, LogoComponent, SalesPerDayChartComponent, SalesPerSalesRepChartComponent, SalesPerSalesRepCustomerComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements OnInit {
  companyId = 1; // TODO: don't hard-code company id
  pastMonths: number = 3;

  ngOnInit(): void {
    this.fetchChartData('6');
  }

  fetchChartData(months: string): void {
    this.pastMonths = Number(months);
  }

  //////////////////////////////////
  // Line

  lineChartLegend = true;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Sales',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
      {
        data: [30, 40, 45, 50, 45, 40, 25],
        label: 'Volume',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(55,0,0,0.3)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };

  //////////////////////////////////
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Positions the legend at the bottom
      },
    },
  };
  public pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //////////////////////////////////
  // Bar
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
  };

  //////////////////////////////////
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450, 100], label: 'Series A' },
    { data: [50, 150, 120], label: 'Series B' },
    { data: [250, 130, 70], label: 'Series C' },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };
}
