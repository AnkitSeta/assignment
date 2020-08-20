import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdminDialogComponent } from './student-admin-dialog.component';

describe('StudentAdminDialogComponent', () => {
  let component: StudentAdminDialogComponent;
  let fixture: ComponentFixture<StudentAdminDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAdminDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
