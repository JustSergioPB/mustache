import { TestBed } from '@angular/core/testing';

import { ConnectionMockService } from './connection-mock.service';

describe('ConnectionMockService', () => {
  let service: ConnectionMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
