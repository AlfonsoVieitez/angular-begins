import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'a-begins-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<any>;
  projectId: string;

  constructor(private projectsService: ProjectsService, activatedRoute: ActivatedRoute) {
    this.projectId = activatedRoute.snapshot.params.id;
    this.project$ = this.projectsService.getById$(this.projectId);
  }

  ngOnInit() {}

  onDelete() {
    this.projectsService.deleteById$(this.projectId).subscribe();
  }
}
