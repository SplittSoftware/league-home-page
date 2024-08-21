import { Component, Input } from '@angular/core';
import { Trophy } from '../../../../core/models/trophy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trophy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trophy.component.html',
  styleUrl: './trophy.component.scss'
})

export class TrophyComponent {
  @Input() trophy?: Trophy;
}
