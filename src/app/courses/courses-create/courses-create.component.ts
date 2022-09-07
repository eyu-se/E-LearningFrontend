import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-create',
  templateUrl: './courses-create.component.html',
  styleUrls: ['./courses-create.component.css']
})
export class CoursesCreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      category: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)

    });
  }


  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);

  }

}
