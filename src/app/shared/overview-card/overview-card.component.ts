import { Component, input } from '@angular/core';

@Component({
  selector: 'app-overview-card',
  imports: [],
  templateUrl: './overview-card.component.html',
  styleUrl: './overview-card.component.scss'
})
export class OverviewCardComponent {
  select = input.required<number>();

  data = [
    [{ id: 1, title: "Sales", icon: "sales.png", value: "832" },
    { id: 2, title: "Revenue", icon: "Revenue.png", value: "18,300" },
    { id: 3, title: "Profit", icon: "Profit.png", value: "868" },
    { id: 4, title: "Cost", icon: "Cost.png", value: "17,432" },
    ],
    [{ id: 1, title: "Purchase", icon: "PurchesIcon.svg", value: "82" },
    { id: 2, title: "Cost", icon: "Cost.png", value: "13,573" },
    { id: 3, title: "Cancel", icon: "CancelIcon.svg", value: "5" },
    { id: 4, title: "Return", icon: "Profit.png", value: "17,432" },
    ]
  ];

  getData() {
    return this.data[this.select()];
  }

}
