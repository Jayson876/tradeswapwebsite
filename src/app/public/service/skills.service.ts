import { HttpClient } from '@angular/common/http';
import { map, tap,} from 'rxjs/operators';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/skills';
import { of, } from 'rxjs';
import { catchError } from 'rxjs/operators';import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  REST_API_URL = environment.REST_API_URL  + '/category'

  constructor(private skillService: HttpClient) { }

  getAllSkills(): Observable<Skills[]>{
    return this.skillService.get<Skills[]>(this.REST_API_URL).pipe(
      tap((AllSkills: any) => console.log(`SUCCESSFULLY RETREIVED SKILLS`)),
      catchError(error => of([])),
    );
  }

  addSkill(data:object):Observable<Skills>{
    return this.skillService.post<Skills>(`${this.REST_API_URL}`, data).pipe(
      tap( skillAddess => console.log(`SUCCESSFULLY ADDED Skill`)),
      catchError( error => of())
    );
  }

  getSkillById(id: string):Observable<Skills | any>{
    return this.skillService.get<Skills>(`${this.REST_API_URL}/${id}`).pipe(
      tap(skillSelected => console.log(`Skill Retrieved By Id`)),
      catchError(error => of(new Skills())),
    );
  }
  
  updateSkill(id: string, body:object): Observable<Skills>{
    return this.skillService.patch<Skills>(`${this.REST_API_URL}/${id}`, body).pipe(
      tap(newData => console.log(`Skill updated successfully`)),
      catchError(error => of(new Skills())),
    );
  }

  deleteSkill(id:string):Observable<Skills>{
    return this.skillService.delete<Skills>(`${this.REST_API_URL}/${id}`).pipe(
      tap( deletedSkill => console.log(`Record Was Deleted`)),
      catchError( error => of())
    );
  }
}
