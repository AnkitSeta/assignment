import { Component, OnInit } from '@angular/core';
import { StudentsResultService } from './students-result.service';
import { Marks, StudentResult } from '../core/models/student-result.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentAdminDialogComponent } from '../student-admin-dialog/student-admin-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-result',
  templateUrl: './students-result.component.html',
  styleUrls: ['./students-result.component.scss'],
})
export class StudentsResultComponent implements OnInit {
  studentsResults: StudentResult[] = [];
  topprMarks: number = 0;
  displayedColumns: string[] = ['name', 'rollNumber', 'totalMarks', 'status'];

  constructor(
    private studentsResultService: StudentsResultService,
    public dialog: MatDialog,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getStudentResult();
  }

  getStudentResult() {
    this.studentsResultService.get().subscribe((res) => {
      res.forEach((student) => {
        student.totalMarks = this.setTotalMarks(student.marks);

        if (student.totalMarks >= this.topprMarks) {
          this.setPassFailStatus(res);
          student.status = 'topper';
          this.topprMarks = student.totalMarks;
        }
      });

      this.studentsResults = this.sortByName(res);
    });
  }

  setPassFailStatus(students: StudentResult[]) {
    students.forEach((student) => {
      if (student.totalMarks < 85) {
        student.status = 'fail';
      } else {
        student.status = 'pass';
      }
    });
  }

  sortByName(students: StudentResult[]) {
    return students.sort((a, b) => a.name.localeCompare(b.name));
  }

  setTotalMarks(marks: Marks) {
    return +marks.English + +marks.Maths + +marks.Science;
  }

  onAddStudent() {
    const dialogRef = this.dialog.open(StudentAdminDialogComponent, {
      width: '600px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //Call for adding new student should be made form here
        this.toasterService.success('Student registered successfully.');
        console.log(result);
      }
    });
  }
}
