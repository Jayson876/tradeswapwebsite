import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { Auth } from '../models/auth';

const AUTH_DATA = 'user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private authEndpoint = `http://trade-swap-backend.vercel.app/api/v1/auth`;
  private subject = new BehaviorSubject<Auth | null>(null);
  user$: Observable<Auth | null> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    // optional. this is an observable to check if the user is logged in. returns a boolean
    // u can use this in a condition on the html using async pipe
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }
  // when you login this just puts your info thats sent back from the server to local storage
  // needs testing...not sure what happens if it fails
  login(credentials: Auth): Observable<Auth> {
    return this.http.post<Auth>(this.authEndpoint, credentials).pipe(
      tap((user) => {
        this.subject.next(user);
        localStorage.setItem(AUTH_DATA, JSON.stringify(user));
      }),
      shareReplay()
    );
  }
  // this removes your data from localstorage
  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
}
