import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../core/components/table/table.component';
import { PunishmentService } from '../../services/punishment.service';
import { Column } from '../../../../core/models/column';
import { Punishment } from '../../../../core/models/punishment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punishment-list',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './punishment-list.component.html',
  styleUrl: './punishment-list.component.scss'
})
export class PunishmentListComponent implements OnInit {
  constructor(private punishmentService: PunishmentService) { }

  waffleEmoji = '🧇'

  tableColumns: Array<Column> = [
    { columnDef: 'name', header: 'Name', cell: (punishment: Record<string, any>) => `${punishment['name']}` },
    { columnDef: 'waffles', header: 'Waffles', cell: (punishment: Record<string, any>) => `${punishment['waffleString']}` },
    { columnDef: 'hours', header: 'Hours', cell: (punishment: Record<string, any>) => `${punishment['punishmentResult']['hours']}` },
    { columnDef: 'year', header: 'Year', cell: (punishment: Record<string, any>) => `${punishment['year']}` },
    { columnDef: 'season', header: 'Season', cell: (punishment: Record<string, any>) => `${punishment['season']}` },
  ];

  tableData: Array<Punishment> = [];

  ngOnInit(): void {
    this.punishmentService.getPunishments().subscribe((punishments) => {
      punishments.forEach((punishment) => {
        punishment.link = `/season/${punishment.season}`
      })

      punishments.forEach((punishment) => {
        punishment.waffleString = this.waffleEmoji.repeat(punishment.punishmentResult.waffles) + '(' + punishment.punishmentResult.waffles + ')'
      })

      punishments = punishments.sort((a, b) => b.punishmentResult.waffles - a.punishmentResult.waffles)

      this.tableData = punishments;
    });
  }
}
