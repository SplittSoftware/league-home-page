import { Component, Input, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';
import { Season } from '../../../../core/models/season';
import { TableComponent } from '../../../../core/components/table/table.component';
import { CommonModule } from '@angular/common';
import { Column } from '../../../../core/models/column';
import { SeasonManager } from '../../../../core/models/manager';
import { TrophyCaseComponent } from '../../../trophy-case/components/trophy-case/trophy-case.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Trophy } from '../../../../core/models/trophy';

@Component({
  selector: 'app-season',
  standalone: true,
  imports: [MatButtonModule, RouterLink, TableComponent, CommonModule, TrophyCaseComponent],
  templateUrl: './season.component.html',
  styleUrl: './season.component.scss'
})
export class SeasonComponent implements OnInit {
  constructor(private seasonService: SeasonService) { }

  season!: Season | undefined;
  allSeasons!: Season[] | undefined;

  firstTrophy?: Trophy;
  secondTrophy?: Trophy;
  thirdTrophy?: Trophy;

  tableColumns: Array<Column> = [
    { columnDef: 'name', header: 'Name', cell: (manager: Record<string, any>) => `${manager['name']}` },
    { columnDef: 'place', header: 'Finish Place', cell: (manager: Record<string, any>) => `${manager['place']}`, isSortable: true },
    { columnDef: 'regPlace', header: 'Reg. Season Finish', cell: (manager: Record<string, any>) => `${manager['regPlace']}`, isSortable: true },
    { columnDef: 'record', header: 'Season Record', cell: (manager: Record<string, any>) => `${manager['wins']} - ${manager['losses']}` },
    { columnDef: 'pointsFor', header: 'Points For', cell: (manager: Record<string, any>) => `${manager['pointsFor']}`, isSortable: true },
    { columnDef: 'pointsAgainst', header: 'Points Against', cell: (manager: Record<string, any>) => `${manager['pointsAgainst']}`, isSortable: true },
  ];

  tableData: Array<SeasonManager> = [];

  getSeason(seasonNumber: number): void {
    this.seasonService.getSeason(seasonNumber).subscribe((season) => {
      console.log('Got season ' + seasonNumber);
      season.records.forEach((record) => {
        record.link = `/manager/${record.name}`;
      })

      this.tableData = season.records.sort((a, b) => a.place - b.place)
      this.season = season

      this.firstTrophy = {
        type: 'first',
        manager: season.records.find((record) => record.place == 1)
      }

      this.secondTrophy = {
        type: 'second',
        manager: season.records.find((record) => record.place == 2)
      }

      this.thirdTrophy = {
        type: 'third',
        manager: season.records.find((record) => record.place == 3)
      }
    })
  }

  ngOnInit(): void {
    this.seasonService.getSeasons().subscribe((seasons) => {
      seasons.forEach((season) => season.link = `/season/${season.season}`);
      this.allSeasons = seasons.sort((a, b) => a.season - b.season);
    })
  }

  @Input()
  set seasonNumber(seasonNumber: number) {
    this.getSeason(seasonNumber);
  }
}
