import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from '../../store.service';
@Component({
  selector: 'a-begins-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() title = '';
  numProjects$: Observable<any>;
  constructor(private store: StoreService) {
    this.numProjects$ = this.store.select$().pipe(map(s => s.numProjects));
  }

  ngOnInit() {}
}
