import { CoursesService } from 'src/app/services/courses.service';
import { CourseCategoryService } from './../../services/course-category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseCategory } from 'src/app/models/course-category';

@Component({
  selector: 'app-courses-create',
  templateUrl: './courses-create.component.html',
  styleUrls: ['./courses-create.component.css']
})
export class CoursesCreateComponent implements OnInit {

  form!: FormGroup;
  courseCategories:CourseCategory[] = [];


  constructor(
    private _router: Router,
    private _courseCategories:CourseCategoryService,
    private _courses:CoursesService

  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      courseCategoryId: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)

    });
  }



  loadCategories() {
    this._courseCategories.getList().subscribe(
      (res) => {
        this.courseCategories = [...res];
        console.log(this.courseCategories);

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

    this._courses.add(this.form.value).subscribe(
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
