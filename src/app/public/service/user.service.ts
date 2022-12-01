import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map, tap,} from 'rxjs/operators';
import { BehaviorSubject, pipe } from 'rxjs';
import { of, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  REST_API_URL = environment.REST_API_URL  + '/users'

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.REST_API_URL);
  }


  addUser(data:object):Observable<User>{
    return this.http.post<User>(`${this.REST_API_URL}`, data).pipe(
      tap( userAddedd => console.log(`SUCCESSFULLY ADDED USER`)),
      catchError( error => of())
    );
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(`${this.REST_API_URL}/${id}`, user);
  }

  getUserByID(id: string):Observable<User | any>{
    return this.http.get<User>(`${this.REST_API_URL}/${id}`).pipe(
      tap(selectedWorker => console.log(`User Retrieved By Id`)),
      catchError(error => of(new User())),
    );
  }
  
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.REST_API_URL}/${id}`);
  }
  findUserByParishId(id: number): Observable<User> {
    return this.http.get<User>(`${this.REST_API_URL}/parish-search/${id}`);
  }
}
