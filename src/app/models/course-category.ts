import { Course } from './course';
export interface CourseCategory {
  id: number;
  name: string;
  description: string;
  courses: Course[];

}
