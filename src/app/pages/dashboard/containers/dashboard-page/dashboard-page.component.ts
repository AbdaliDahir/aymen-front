import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TablesService } from '../../../../services/tables.service';
import { Customer } from '../../../../models/customer';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  public materialTableData$: Observable<Customer[]>

  constructor(private service: TablesService) {
    this.materialTableData$ = service.loadMaterialTableData();
  }
}
