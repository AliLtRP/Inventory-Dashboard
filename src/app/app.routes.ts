import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: "full",
    loadComponent: () => import("./features/dashboard/dashboard.component").then(m => {return m.DashboardComponent})
},
{
    path: 'inventory',
    pathMatch: "full",
    loadComponent: () => import("./features/inventory/inventory.component").then(m => {return m.InventoryComponent})
},
{
    path: 'reports',
    pathMatch: "full",
    loadComponent: () => import("./features/reports/reports.component").then(m => {return m.ReportsComponent})
}
];
