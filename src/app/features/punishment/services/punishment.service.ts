import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Punishment } from '../../../core/models/punishment';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PunishmentService {

  constructor(private http: HttpClient) { }

  getPunishments(): Observable<Punishment[]> {
    console.log('Getting all punishments');
    return this.http.get<Punishment[]>(`${environment.apiHost}/punishment`);
  }
}
