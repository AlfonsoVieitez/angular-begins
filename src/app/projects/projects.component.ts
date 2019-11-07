import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StoreService } from '../store.service';
import { ProjectsService } from './projects.service';
@Component({
  selector: 'a-begins-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects$: Observable<any[]>;
  private postSubscriptions: Subscription[] = [];
  constructor(private projectsService: ProjectsService, private store: StoreService) {}

  ngOnInit() {
    this.getProjects();
  }

  onSave(newProject: any) {
    this.postSubscriptions.push(
      this.projectsService.post$(newProject).subscribe({
        next: x => this.getProjects(),
        error: e => console.error(e),
        complete: () => console.warn('end')
      })
    );
  }

  getProjects() {
    this.projects$ = this.projectsService.getAll$().pipe(tap(x => this.store.dispatch('setNumProjects', x.length)));
  }

  ngOnDestroy(): void {
    this.postSubscriptions.forEach(s => s.unsubscribe());
  }
}
