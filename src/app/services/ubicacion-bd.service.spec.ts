import { TestBed } from '@angular/core/testing';

import { UbicacionBDService } from './ubicacion-bd.service';

describe('UbicacionBDService', () => {
  let service: UbicacionBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicacionBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
