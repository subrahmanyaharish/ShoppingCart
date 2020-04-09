import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Auth } from './loginModel';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  auth = 'https://localhost:44308/api/auth/verifyUserName?username=';
  constructor(private http: HttpClient) { }

  public verifyUser(user: string): Observable<number> {
    let dataR: number;
    const url = 'https://localhost:44308/api/auth/verifyUserName?username=' + user;
    return this.http.get<number>(url).pipe(
      tap(
        data => {console.log('data' + data); dataR = data; },
        error => console.log(error)
      )
    );
  }

  public getLoginInfo(user: string): Observable<Auth> {
    return this.http.get<Auth>(`localhost:3000/login?username=${user}`);
  }
}
