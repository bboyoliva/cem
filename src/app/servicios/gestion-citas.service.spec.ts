import { TestBed } from '@angular/core/testing';

import { GestionCitasService } from './gestion-citas.service';

describe('GestionCitasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionCitasService = TestBed.get(GestionCitasService);
    expect(service).toBeTruthy();
  });
});
