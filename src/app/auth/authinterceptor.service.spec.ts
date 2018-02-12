import { TestBed, inject } from '@angular/core/testing';

import { AuthinterceptorService } from './authinterceptor.service';

describe('AuthinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthinterceptorService]
    });
  });

  it('should be created', inject([AuthinterceptorService], (service: AuthinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
