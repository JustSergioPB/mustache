import { TestBed } from '@angular/core/testing';

import { NotificationMockService } from './notification-mock.service';

describe('NotificationMockService', () => {
  let service: NotificationMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
