import { Component, input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  imports: [],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss'
})
export class SummaryCardComponent {
  select = input.required<number>();

  data = [
    [{id:1, title: "Quantity in Hand", quantity: "868", img: "hand.png"}, {id:2, title: "To be received", quantity: "200", img: "location.png"}],
    [{id:1, title: "Number of Suppliers", quantity: "31", img: "UserIcon.svg"}, {id:2, title: "Number of Categories", quantity: "21", img: "CategoryIcon.svg"}],
  ]

  getData() {
    return this.data[this.select()];
  }
}
