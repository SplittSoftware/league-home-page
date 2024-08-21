import { Routes } from '@angular/router';
import { ManagerComponent } from './features/managers/components/manager/manager.component';
import { ManagerListComponent } from './features/managers/components/manager-list/manager-list.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { SeasonComponent } from './features/season/components/season/season.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'manager/:name', component: ManagerComponent },
    { path: 'season/:seasonNumber', component: SeasonComponent },
    { path: '**', redirectTo: '/' }
];
