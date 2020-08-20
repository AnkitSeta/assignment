import { TestBed } from '@angular/core/testing';

import { StudentsResultService } from './students-result.service';

describe('StudentsResultService', () => {
  let service: StudentsResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
