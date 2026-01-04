import { Routes } from '@angular/router';
import { ManagerComponent } from './features/managers/components/manager/manager.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { SeasonComponent } from './features/season/components/season/season.component';
import { PunishmentListComponent } from './features/punishment/components/punishment-list/punishment-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'manager/:name', component: ManagerComponent },
    { path: 'season/:seasonNumber', component: SeasonComponent },
    { path: 'waffles', component: PunishmentListComponent },
    { path: '**', redirectTo: '/' }
];
