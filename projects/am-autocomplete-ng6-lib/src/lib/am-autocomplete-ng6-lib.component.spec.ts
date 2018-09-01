import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmAutocompleteNg6LibComponent } from './am-autocomplete-ng6-lib.component';

describe('AmAutocompleteNg6LibComponent', () => {
  let component: AmAutocompleteNg6LibComponent;
  let fixture: ComponentFixture<AmAutocompleteNg6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmAutocompleteNg6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmAutocompleteNg6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
