import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from './store.service';

@Component({
  selector: 'a-begins-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-begins';
  numProjects$: Observable<number>;

  constructor(store: StoreService) {
    this.numProjects$ = store.select$().pipe(map(s => s.numProjects));
  }
}
