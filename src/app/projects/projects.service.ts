import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url = 'https://api-base.herokuapp.com/api/pub/projects';
  constructor(private httpClient: HttpClient) {}
  getAll$(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  getById$(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<any>(url);
  }
  post$(project: any) {
    return this.httpClient.post<any>(this.url, project);
  }
}
