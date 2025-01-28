import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sider-nav',
  imports: [RouterModule],
  templateUrl: './sider-nav.component.html',
  styleUrl: './sider-nav.component.scss'
})
export class SiderNavComponent {
  position = signal<number>(1);

  constructor(private router: Router) {}

  icons: Array<{id: number, name: string, title: string}> = [
    {id: 1, name:'HomeIcon.svg', title: "Dashboard"}, 
    {id: 2, name:'InventoryIcon.svg', title: "Inventory"}, 
    {id: 3, name:'ReportsIcon.svg', title: "Reports"}, 
    {id: 4, name:'SuppliersIcon.svg', title: "Suppliers"}, 
    {id: 5, name:'OrdersIcon.svg', title: "Orders"}, 
    {id: 6, name: "StoreIcon.svg", title: "Manage Store"}
  ];

  handlePositionChange(position: number) {
    this.position.set(position);
    const route = this.icons[position-1].title.toLowerCase();
    this.router.navigate([route]);
  }
}
