import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  saveUserInformation(data) {
    return this.http.post(`${environment.serverUrl}/api/v1/learner/save_learner_info`, data).pipe(
      tap((_) => {
      })
    );
  }

  getUserInformation(userClass: string) {
    return this.http.get(`${environment.serverUrl}/api/v1/learner/get_learner_info/${userClass}`)
      .pipe(tap((_) => {
      }));
  }
}
