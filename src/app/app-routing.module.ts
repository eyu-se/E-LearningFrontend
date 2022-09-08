import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesCreateComponent } from './courses/courses-create/courses-create.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "courses", component: CoursesListComponent},
  {path: "courses/:courseId/detail", component: CoursesDetailComponent},
  {path: "courses/create", component: CoursesCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
