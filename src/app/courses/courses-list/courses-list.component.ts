import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses:Course[] = []

  constructor(private _coursesService: CoursesService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this._coursesService.getList().subscribe(
      (res) => {
        this.courses = [...res];
        console.log(this.courses);

      },
      (err) => {
        console.log(err);
      }
    );
  }

}
