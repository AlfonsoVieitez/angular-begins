import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectNewComponent, ProjectListComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
