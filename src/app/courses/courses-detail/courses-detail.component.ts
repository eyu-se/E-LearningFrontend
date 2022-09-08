import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  course!: Course;

  constructor(private _coursesService : CoursesService , private _router:Router,  private _activatedroute: ActivatedRoute  ) {

  }

  ngOnInit(): void {
    var courseId = this._activatedroute.snapshot.paramMap.get('courseId');
    this.load(courseId);
  }

  load(id: any) {

    this._coursesService.get(id).subscribe(
      (res) => {
        this.course = res;
        console.log(this.course);

      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteCourse(){
    this._coursesService.delete(this.course.id).subscribe(
      (res) => {

        console.log(res);
        this._router.navigate(['/courses']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
