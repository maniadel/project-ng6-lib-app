import { TestBed, inject } from '@angular/core/testing';

import { AmAutocompleteNg6LibService } from './am-autocomplete-ng6-lib.service';

describe('AmAutocompleteNg6LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmAutocompleteNg6LibService]
    });
  });

  it('should be created', inject([AmAutocompleteNg6LibService], (service: AmAutocompleteNg6LibService) => {
    expect(service).toBeTruthy();
  }));
});
