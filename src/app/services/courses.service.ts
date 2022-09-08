import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpGenericService } from './generic/http-generic.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends HttpGenericService<any> {

getResourceUrl(): string {
  return 'courses';
}



}
