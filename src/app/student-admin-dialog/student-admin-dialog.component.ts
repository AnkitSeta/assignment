import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-admin-dialog',
  templateUrl: './student-admin-dialog.component.html',
  styleUrls: ['./student-admin-dialog.component.scss'],
})
export class StudentAdminDialogComponent implements OnInit {
  studentForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z]*$/),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z]*$/),
      ],
    ],
    studentClass: ['', [Validators.required]],
    yearOfPassing: [
      '',
      [Validators.required, Validators.max(2017), Validators.maxLength(4)],
    ],
    percentage: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentAdminDialogComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.dialogRef.close(this.studentForm.value);
  }
}
