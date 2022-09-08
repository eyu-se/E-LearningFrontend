import { CourseCategoryService } from './../../services/course-category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCategory } from 'src/app/models/course-category';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit {

  form!: FormGroup;
  courseCategories:CourseCategory[] = [];
  course!: Course;


  constructor(
    private _router: Router,
    private _courseCategories:CourseCategoryService,
    private _courses:CoursesService,
    private _activatedroute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    var courseId = this._activatedroute.snapshot.paramMap.get('courseId');
    this.loadCourse(courseId);



  }

  loadCourse(id: any) {

    this._courses.get(id).subscribe(
      (res) => {
        this.course = res;
        console.log(this.course);
        this.loadCategories();

      },
      (err) => {
        console.log(err);
      }
    );
  }


  loadCategories() {
    this._courseCategories.getList().subscribe(
      (res) => {
        this.courseCategories = [...res];
        console.log(this.courseCategories);

        this.form = new FormGroup({
          name: new FormControl(this.course.name, [Validators.required]),
          description: new FormControl(this.course.description),
          courseCategoryId: new FormControl(this.course.courseCategoryId, Validators.required),
          author: new FormControl(this.course.author, Validators.required)

        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  get f(){
    return this.form.controls;
  }



  submit(){

    console.log(this.form.value);
    this.course.author = this.form.value.author;
    this.course.courseCategoryId = this.form.value.courseCategoryId;
    this.course.name = this.form.value.name;
    this.course.description = this.form.value.description;

    this._courses.update(this.course.id, this.course).subscribe(
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
