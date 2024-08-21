import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Season } from '../../../core/models/season';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) { }

  getSeasons(): Observable<Season[]> {
    console.log('Getting all seasons');
    return this.http.get<Season[]>(`${environment.apiHost}/season`);
  }

  getSeason(seasonNumber: number): Observable<Season> {
    console.log('Getting season ' + seasonNumber);
    return this.http.get<Season>(`${environment.apiHost}/season/${seasonNumber}`);
  }
}
