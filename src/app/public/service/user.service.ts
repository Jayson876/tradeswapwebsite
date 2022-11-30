import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { of, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map, tap,} from 'rxjs/operators';
import { BehaviorSubject, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  REST_API_URL = environment.REST_API_URL  + '/parish'

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.REST_API_URL);
  }

  addUser(data:object):Observable<User>{
    return this.http.post<User>(`${this.REST_API_URL}`, data).pipe(
      tap( userAdded => console.log(`SUCCESSFULLY ADDED User`)),
      catchError( error => of())
    );
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(`${this.REST_API_URL}/${id}`, user);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.REST_API_URL}/${id}`);
  }
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.REST_API_URL}/${id}`);
  }
  findUserByParishId(id: number): Observable<User> {
    return this.http.get<User>(`${this.REST_API_URL}/parish-search/${id}`);
  }
}
