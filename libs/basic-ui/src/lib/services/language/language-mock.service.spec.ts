import { TestBed } from '@angular/core/testing';

import { LanguageMockService } from './language-mock.service';

describe('LanguageMockService', () => {
  let service: LanguageMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
