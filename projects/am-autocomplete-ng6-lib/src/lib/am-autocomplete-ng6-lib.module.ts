import { NgModule } from '@angular/core';
import { AmAutocompleteNg6LibComponent } from './am-autocomplete-ng6-lib.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [AmAutocompleteNg6LibComponent],
  exports: [
    AmAutocompleteNg6LibComponent
  ]
})
export class AmAutocompleteNg6LibModule { }
