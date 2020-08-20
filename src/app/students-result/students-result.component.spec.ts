import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsResultComponent } from './students-result.component';

describe('StudentsResultComponent', () => {
  let component: StudentsResultComponent;
  let fixture: ComponentFixture<StudentsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
