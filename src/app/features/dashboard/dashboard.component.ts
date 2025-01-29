import { Component } from '@angular/core';
import { OverviewCardComponent } from "../../shared/overview-card/overview-card.component";
import { SummaryCardComponent } from "../../shared/summary-card/summary-card.component";
import { BarChartComponent } from "../../shared/bar-chart/bar-chart.component";
import { OrderChartComponent } from "../../shared/order-chart/order-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [OverviewCardComponent, SummaryCardComponent, BarChartComponent, OrderChartComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
