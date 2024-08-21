import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ManagerService } from './features/managers/services/manager.service';
import { SeasonService } from './features/season/services/season.service';
import { CommonModule } from '@angular/common';
import { OverallManager } from './core/models/manager';
import { Season } from './core/models/season';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  constructor(private managerService: ManagerService, private seasonService: SeasonService) { }

  managerData: OverallManager[] = []
  seasonData: Season[] = []

  ngOnInit(): void {
    this.managerService.getManagers().subscribe((managers) => {
      managers.forEach((manager) => manager.link = `/manager/${manager.name}`)
      this.managerData = managers;
    });

    this.seasonService.getSeasons().subscribe((seasons) => {
      seasons.forEach((season) => season.link = `/season/${season.season}`);
      this.seasonData = seasons.sort((a, b) => a.season - b.season);
    });
  }

}

