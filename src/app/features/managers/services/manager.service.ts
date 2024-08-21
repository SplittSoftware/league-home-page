import { Injectable } from '@angular/core';

import { OverallManager, SeasonManager } from '../../../core/models/manager';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  constructor(private http: HttpClient) { }


  getManagers(): Observable<OverallManager[]> {
    console.log('Getting managers');
    return this.http.get<OverallManager[]>(`${environment.apiHost}/manager`);
  }

  getManager(managerName: string): Observable<OverallManager> {
    console.log('Getting manager ' + managerName);
    return this.http.get<OverallManager>(`${environment.apiHost}/manager/${managerName.toLowerCase()}`);
  }

  getManagerRecords(managerName: string): Observable<SeasonManager[]> {
    console.log('Getting manager records ' + managerName);
    return this.http.get<SeasonManager[]>(`${environment.apiHost}/manager/${managerName.toLowerCase()}/records`);
  }
}
