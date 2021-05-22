import { TestBed } from '@angular/core/testing';

import { SpotifyAuthInterceptorService } from './spotify-auth-interceptor.service';

describe('SpotifyAuthInterceptorService', () => {
  let service: SpotifyAuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyAuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
