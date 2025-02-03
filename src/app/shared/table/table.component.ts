import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TableRow {
  tr: Array<{ th?: string; td?: string; }>
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  title = 'Products';

  tableData = input.required<TableRow[]>();
}
