import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexStroke,
  ApexFill,
  ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {  
  @ViewChild("chart") chart!: ChartComponent;
  
  public series: ApexAxisChartSeries = [
    {
      name: 'Purchase',
      data: [44000, 45000, 47000, 56000, 51000, 58000, 43000, 60000, 36000]
    },
    {
      name: 'Sales',
      data: [56000, 45000, 10000, 28000, 47000, 20500, 51000, 54000, 34000],
    },
  ];  
  public chartOptions: ChartOptions = {
    series: this.series,
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        // endingShape: "rounded"
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      min: 10000,
      max: 60000,
      tickAmount: 5,
      labels: {
        formatter: function(val: number) {
          return val.toLocaleString();
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return "$ " + val + " thousands"
        }
      }
    }
  };
}
