import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL: string = 'http://localhost:8080/personas/';

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.HttpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.HttpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  /*public save(educacion: Educacion): Observable<any>{
    return this.HttpClient.post<any>(this.URL + 'create', educacion);
  }*/

  public update(id: number, persona: Persona): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, persona);
  }

  /*public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}