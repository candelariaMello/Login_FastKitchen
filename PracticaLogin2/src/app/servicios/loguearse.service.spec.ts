import { TestBed } from '@angular/core/testing';

import { LoguearseService } from './loguearse.service';

describe('LoguearseService', () => {
  let service: LoguearseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoguearseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
