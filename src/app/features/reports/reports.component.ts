import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReportsOverviewComponent } from '../../shared/reports-overview/reports-overview.component';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  colors: string[];
};

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    NgApexchartsModule,
    ReportsOverviewComponent
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  public chartOptions: ChartOptions = {
    series: [
      {
        name: "Revenue",
        data: [25000, 35000, 30000, 45000, 40000, 50000, 45000]
      }
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false
      }
    },
    colors: ['#1366D9'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']
    },
    yaxis: {
      labels: {
        formatter: function(value) {
          return value.toLocaleString();
        }
      }
    },
    tooltip: {
      y: {
        formatter: function(value) {
          return "₹" + value.toLocaleString();
        }
      }
    }
  };
}
