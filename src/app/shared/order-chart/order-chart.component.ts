import { Component, ViewChild } from "@angular/core";
import { NgApexchartsModule, ChartComponent } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-order-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './order-chart.component.html',
  styleUrl: './order-chart.component.scss'
})
export class OrderChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Orders",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Returns",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
}
