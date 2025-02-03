import { Component, input } from '@angular/core';

@Component({
  selector: 'app-inventory-card',
  imports: [],
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.scss'
})
export class InventoryCardComponent {
  items = input<any[]>();
}
