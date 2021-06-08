import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../../../../models/customer';

@Component({
  selector: 'app-logs-table',
  templateUrl: './logs-table.component.html',
  styleUrls: ['./logs-table.component.scss']
})
export class LogsTableComponent implements OnInit {

    @Input() materialTableDate: Customer[];
    public displayedColumns: string[] = ['name', 'email', 'product', 'price', 'date', 'city', 'status'];
    public dataSource: Customer[];

    public ngOnInit() {
      this.dataSource = this.materialTableDate;
    }

}
