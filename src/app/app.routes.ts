import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'dashboard',
    pathMatch: "full",
    loadComponent: () => import("./features/dashboard/dashboard.component").then(m => {return m.DashboardComponent})
},
{
    path: 'inventory',
    pathMatch: "full",
    loadComponent: () => import("./features/inventory/inventory.component").then(m => {return m.InventoryComponent})
}
];
