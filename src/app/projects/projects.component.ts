import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'a-begins-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<any[]>;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  onSave(newProject: any) {
    this.projectsService.post$(newProject).subscribe({
      next: x => this.getProjects(),
      error: e => console.error(e),
      complete: () => console.warn('end')
    });
  }

  getProjects() {
    this.projects$ = this.projectsService.getAll$();
  }
}
