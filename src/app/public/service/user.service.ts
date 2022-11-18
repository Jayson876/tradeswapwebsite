import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userEndPoint = `http://trade-swap-backend.vercel.app/api/v1/users`;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userEndPoint);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userEndPoint, user);
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(`${this.userEndPoint}/${id}`, user);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.userEndPoint}/${id}`);
  }
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.userEndPoint}/${id}`);
  }
  findUserByParishId(id: number): Observable<User> {
    return this.http.get<User>(`${this.userEndPoint}/parish-search/${id}`);
  }
}
