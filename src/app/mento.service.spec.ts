import { TestBed } from '@angular/core/testing';

import { MentoService } from './mento.service';

describe('MentoService', () => {
  let service: MentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
