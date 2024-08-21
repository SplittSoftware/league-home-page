import { Component, Input } from '@angular/core';
import { TrophyComponent } from '../trophy/trophy.component';
import { Trophy } from '../../../../core/models/trophy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trophy-case',
  standalone: true,
  imports: [TrophyComponent, CommonModule],
  templateUrl: './trophy-case.component.html',
  styleUrl: './trophy-case.component.scss'
})

export class TrophyCaseComponent {
  firstTrophy?: Trophy;
  secondTrophy?: Trophy;
  thirdTrophy?: Trophy;

  @Input()
  set first(trophy: Trophy) {
    trophy.image = `places/${trophy.type}.png`
    this.firstTrophy = trophy
  }

  @Input()
  set second(trophy: Trophy) {
    trophy.image = `places/${trophy.type}.png`
    this.secondTrophy = trophy
  }

  @Input()
  set third(trophy: Trophy) {
    trophy.image = `places/${trophy.type}.png`
    this.thirdTrophy = trophy
  }
}
