import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

import { ManagerComponent } from '../manager/manager.component';
import { ManagerService } from '../../services/manager.service';
import { OverallManager } from '../../../../core/models/manager';
import { Column } from '../../../../core/models/column';
import { TableComponent } from '../../../../core/components/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-list',
  standalone: true,
  imports: [ManagerComponent, TableComponent, MatTableModule, RouterLink, CommonModule],
  templateUrl: './manager-list.component.html',
  styleUrl: './manager-list.component.scss'
})


export class ManagerListComponent implements OnInit {
  constructor(private managerService: ManagerService) { }

  tableColumns: Array<Column> = [
    { columnDef: 'name', header: 'Name', cell: (manager: Record<string, any>) => `${manager['name']}` },
    { columnDef: 'record', header: 'Overall Record', cell: (manager: Record<string, any>) => `${manager['wins']} - ${manager['losses']}` },
    { columnDef: 'averagePlace', header: 'Avg. Place', cell: (manager: Record<string, any>) => `${manager['averagePlace']}`, isSortable: true },
    { columnDef: 'averagePointsFor', header: 'Avg. Points For', cell: (manager: Record<string, any>) => `${manager['averagePointsFor']}`, isSortable: true },
    { columnDef: 'firsts', header: '🥇', cell: (manager: Record<string, any>) => `${manager['firsts']}`, isSortable: true },
    { columnDef: 'seconds', header: '🥈', cell: (manager: Record<string, any>) => `${manager['seconds']}`, isSortable: true },
    { columnDef: 'thirds', header: '🥉', cell: (manager: Record<string, any>) => `${manager['thirds']}`, isSortable: true },
    { columnDef: 'cheds', header: '🚽', cell: (manager: Record<string, any>) => `${manager['cheds']}`, isSortable: true },
  ];

  tableData: Array<OverallManager> = [];

  ngOnInit(): void {
    this.managerService.getManagers().subscribe((managers) => {
      managers.forEach((manager) => {
        manager.link = `/manager/${manager.name}`
      })
      this.tableData = managers;
    });
  }

}
