import { Component, Input, OnInit } from '@angular/core';

import { OverallManager, SeasonManager } from '../../../../core/models/manager';
import { ManagerService } from '../../services/manager.service';
import { Column } from '../../../../core/models/column';
import { TableComponent } from '../../../../core/components/table/table.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [TableComponent, CommonModule, RouterLink, MatButtonModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss'
})
export class ManagerComponent implements OnInit {
  manager!: OverallManager | undefined;
  allManagers: OverallManager[] = [];

  constructor(private managerService: ManagerService) { }

  tableColumns: Array<Column> = [
    { columnDef: 'season', header: 'Season', cell: (manager: Record<string, any>) => `${manager['season']}` },
    { columnDef: 'year', header: 'Year', cell: (manager: Record<string, any>) => `${manager['year']}` },
    { columnDef: 'record', header: 'Season Record', cell: (manager: Record<string, any>) => `${manager['wins']} - ${manager['losses']}` },
    { columnDef: 'regPlace', header: 'Reg. Season Finish', cell: (manager: Record<string, any>) => `${manager['regPlace']}`, isSortable: true },
    { columnDef: 'place', header: 'Finish Place', cell: (manager: Record<string, any>) => `${manager['place']}`, isSortable: true },
    { columnDef: 'pointsFor', header: 'Points For', cell: (manager: Record<string, any>) => `${manager['pointsFor']}`, isSortable: true },
    { columnDef: 'pointsAgainst', header: 'Points Against', cell: (manager: Record<string, any>) => `${manager['pointsAgainst']}`, isSortable: true },

  ];

  tableData: Array<SeasonManager> = [];

  ngOnInit(): void {
    this.managerService.getManagers().subscribe((managers) => {
      managers.forEach((manager) => manager.link = `/manager/${manager.name}`);
      this.allManagers = managers;
    })
  }

  getManager(managerName: string): void {
    this.managerService.getManager(managerName).subscribe((manager) => {
      this.manager = manager
    })

    this.managerService.getManagerRecords(managerName).subscribe((managerRecords) => {
      managerRecords.forEach((record) => {
        record.pointsForString = record.pointsFor.toFixed(2)
        record.pointsAgainstString = record.pointsAgainst.toFixed(2)
        record.link = `/season/${record.season}`
      });
      this.tableData = managerRecords.sort((a, b) => b.season - a.season);
    })
  }

  @Input()
  set name(managerName: string) {
    this.getManager(managerName);
  }
}
