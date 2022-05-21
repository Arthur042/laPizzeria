import { TestBed } from '@angular/core/testing';

import { IngredientDessertService } from './ingredient-dessert.service';

describe('IngredientDessertService', () => {
  let service: IngredientDessertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientDessertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
