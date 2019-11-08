import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectDetailPresenterComponent } from './project-detail/project-detail-presenter/project-detail-presenter.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectNewComponent, ProjectListComponent, ProjectDetailComponent, ProjectDetailPresenterComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
