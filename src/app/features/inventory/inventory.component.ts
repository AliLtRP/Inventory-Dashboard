import { Component } from '@angular/core';
import { InventoryCardComponent } from "../../shared/inventory-card/inventory-card.component";
import { TableComponent, TableRow } from "../../shared/table/table.component";

export interface InventoryItem {
  id: number
  title: string;
  Quantity: string;
  Price?: string;
  Last: string;
  Name?: string;
  titleColor: string
}

@Component({
  selector: 'app-inventory',
  imports: [InventoryCardComponent, TableComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  data: InventoryItem[] = [
    {
      id: 1,
      title: "Categories",
      Quantity: "14",
      Last: "Last 7 days",
      titleColor: "#1570EF"
    },
    {
      id: 2,
      title: "Total Products",
      Quantity: "868",
      Price: "$25000",
      Last: "Last 7 days",
      Name: "Revenue",
      titleColor: "#E19133"
    },
    {
      id: 3,
      title: "Top Selling",
      Quantity: "5",
      Price: "$2500",
      Last: "Last 7 days",
      Name: "Cost",
      titleColor: "#845EBC"
    },
    {
      id: 4,
      title: "Low Stocks",
      Quantity: "12",
      Price: "2",
      Last: "Ordered",
      Name: "Not in stock",
      titleColor: "#F36960"
    }
  ];


  tableData: TableRow[] = [
    {tr: [{th: "Products"}, {th:"Buying Price"}, {th:"Quantity"}, {th:"Threshold Value"}, {th: "Expiry Date"}, {th: "Availability"}]},
    {tr: [{td: "Maggi"}, {td: "$430"}, {td: "43 Packets"}, {td: "12 Packets"}, {td: "11/12/22"}, {td: "In- stock"}]},
    {tr: [{td: "Bru"}, {td: "$257"}, {td: "22 Packets"}, {td: "12 Packets"}, {td: "21/12/22"}, {td: "Out of stock"}]},
    {tr: [{td: "Red Bull"}, {td: "$405"}, {td: "36 Packets"}, {td: "9 Packets"}, {td: "5/12/22"}, {td: "In- stock"}]},
    {tr: [{td: "Bourn Vita"}, {td: "$502"}, {td: "14 Packets"}, {td: "6 Packets"}, {td: "8/12/22"}, {td: "Out of stock"}]},
    {tr: [{td: "Horlicks"}, {td: "$530"}, {td: "5 Packets"}, {td: "5 Packets"}, {td: "9/1/23"}, {td: "In- stock"}]},
    {tr: [{td: "Harpic"}, {td: "$605"}, {td: "10 Packets"}, {td: "5 Packets"}, {td: "9/1/23"}, {td: "In- stock"}]},
    {tr: [{td: "Ariel"}, {td: "$408"}, {td: "23 Packets"}, {td: "7 Packets"}, {td: "15/12/23"}, {td: "Out of stock"}]},
    {tr: [{td: "Scotch Brite"}, {td: "$359"}, {td: "43 Packets"}, {td: "8 Packets"}, {td: "6/6/23"}, {td: "In- stock"}]},
    {tr: [{td: "Coca cola"}, {td: "$205"}, {td: "41 Packets"}, {td: "10 Packets"}, {td: "11/11/22"}, {td: "Low stock"}]},
    {tr: [{td: "Pepsi"}, {td: "$195"}, {td: "38 Packets"}, {td: "10 Packets"}, {td: "12/12/23"}, {td: "In- stock"}]},
    {tr: [{td: "Tide"}, {td: "$445"}, {td: "25 Packets"}, {td: "8 Packets"}, {td: "18/1/24"}, {td: "Low stock"}]},
    {tr: [{td: "Comfort"}, {td: "$385"}, {td: "19 Packets"}, {td: "7 Packets"}, {td: "22/2/24"}, {td: "In- stock"}]},
    {tr: [{td: "Dove"}, {td: "$275"}, {td: "31 Packets"}, {td: "10 Packets"}, {td: "25/3/24"}, {td: "In- stock"}]},
    {tr: [{td: "Dettol"}, {td: "$325"}, {td: "27 Packets"}, {td: "8 Packets"}, {td: "30/1/24"}, {td: "Out of stock"}]},
    {tr: [{td: "Lifebuoy"}, {td: "$185"}, {td: "45 Packets"}, {td: "12 Packets"}, {td: "28/2/24"}, {td: "In- stock"}]},
    {tr: [{td: "Surf Excel"}, {td: "$555"}, {td: "20 Packets"}, {td: "8 Packets"}, {td: "15/4/24"}, {td: "Low stock"}]},
    {tr: [{td: "Colgate"}, {td: "$165"}, {td: "33 Packets"}, {td: "10 Packets"}, {td: "20/3/24"}, {td: "In- stock"}]},
    {tr: [{td: "Pepsodent"}, {td: "$145"}, {td: "28 Packets"}, {td: "9 Packets"}, {td: "17/2/24"}, {td: "In- stock"}]}
  ];
}
