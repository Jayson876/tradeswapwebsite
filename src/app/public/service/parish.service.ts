import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap,} from 'rxjs/operators';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Parish } from '../models/parish';
import { of, } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParishService {
  REST_API_URL = environment.REST_API_URL  + '/parish'

  constructor(private parishService:HttpClient) { }

  getAllParish(): Observable<Parish[]>{
    return this.parishService.get<Parish[]>(this.REST_API_URL).pipe(
      tap((allParish: any) => console.log(`SUCCESSFULLY RETREIVED PARISHES`)),
      catchError(error => of([])),
    );
  }

  addParish(data:object):Observable<Parish>{
    return this.parishService.post<Parish>(`${this.REST_API_URL}`, data).pipe(
      tap( parishAdded => console.log(`SUCCESSFULLY ADDED PARISH`)),
      catchError( error => of())
    );
  }

  getParishByID(id: string):Observable<Parish | any>{
    return this.parishService.get<Parish>(`${this.REST_API_URL}/${id}`).pipe(
      tap(selectedParish => console.log(`Parish Retrieved By Id`)),
      catchError(error => of(new Parish())),
    );
  }
  
  updateParish(id: string, body:object): Observable<Parish>{
    return this.parishService.patch<Parish>(`${this.REST_API_URL}/${id}`, body).pipe(
      tap(newData => console.log(`Parish updated successfully`)),
      catchError(error => of(new Parish())),
    );
  }

  deleteParish(id:string):Observable<Parish>{
    return this.parishService.delete<Parish>(`${this.REST_API_URL}/${id}`).pipe(
      tap( deletedParish => console.log(`Record Was Deleted`)),
      catchError( error => of())
    );
  }
}
