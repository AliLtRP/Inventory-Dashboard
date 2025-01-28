import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sider-nav',
  imports: [],
  templateUrl: './sider-nav.component.html',
  styleUrl: './sider-nav.component.scss'
})
export class SiderNavComponent {
  position = signal<number>(1);

  icons = [
    {id: 1, name:'HomeIcon.svg', title: "Dashobard"}, 
    {id: 2, name:'InventoryIcon.svg', title: "Inventory"}, 
    {id: 3, name:'ReportsIcon.svg', title: "Reports"}, 
    {id: 4, name:'SuppliersIcon.svg', title: "Suppliers"}, 
    {id: 5, name:'OrdersIcon.svg', title: "Orders"}, 
    {id: 6, name: "StoreIcon.svg", title: "Manage Store"}
  ];

  handlePositionChange(position: number) {
    this.position.set(position);
  }
}
