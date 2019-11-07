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
  constructor(projectsService: ProjectsService, activatedRoute: ActivatedRoute) {
    const id = activatedRoute.snapshot.params.id;
    this.project$ = projectsService.getById$(id);
  }

  ngOnInit() {}
}
