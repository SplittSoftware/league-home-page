import { Component, OnInit } from '@angular/core';
import { ManagerListComponent } from '../../../managers/components/manager-list/manager-list.component';
import { TrophyCaseComponent } from '../../../trophy-case/components/trophy-case/trophy-case.component';
import { SeasonService } from '../../../season/services/season.service';
import { Season } from '../../../../core/models/season';
import { Trophy } from '../../../../core/models/trophy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ManagerListComponent, TrophyCaseComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private seasonService: SeasonService) { }

  allSeasons!: Season[] | undefined;

  firstTrophy?: Trophy;
  secondTrophy?: Trophy;
  thirdTrophy?: Trophy;

  ngOnInit(): void {
    this.seasonService.getSeasons().subscribe((seasons) => {
      let lastSeason = seasons.find((season) => season.season == 12)
      this.firstTrophy = {
        type: 'first',
        manager: lastSeason?.records.find((record) => record.place == 1)
      }

      this.secondTrophy = {
        type: 'second',
        manager: lastSeason?.records.find((record) => record.place == 2)
      }

      this.thirdTrophy = {
        type: 'third',
        manager: lastSeason?.records.find((record) => record.place == 3)
      }
    })
  }
}
