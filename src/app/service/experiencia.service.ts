import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL = 'https://backendportfolio-3ena.onrender.com/explab/';

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.HttpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.HttpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.HttpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.HttpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
