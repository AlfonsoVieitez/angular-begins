import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient, private store: StoreService) {}

  getAll$(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url).pipe(tap(x => this.store.dispatch('setNumProjects', x.length)));
  }

  getById$(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<any>(url);
  }
  post$(project: any) {
    return this.httpClient.post<any>(this.url, project);
  }
}
