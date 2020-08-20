import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentResult } from '../core/models/student-result.model';
import { API_END_POINTS } from '../core/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class StudentsResultService {
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<StudentResult[]>(`${API_END_POINTS.STUDENTS_RESULT.get}`);
  }
}
