import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AmAutocompleteNg6LibService } from './am-autocomplete-ng6-lib.service';

@Component({
  selector: 'am-am-autocomplete-ng6-lib',
  template: `
      <div class="autocomplete fieldSize">
        <input (keyup)="doSearch(item.value)"
                (focusout)="focusLost()"
                (focus)="onFocus()"
                class='fieldSize' #item
                value="{{address}}"
                placeholder="{{placeholder}}">
          <div *ngIf="showList" class="autocomplete-items">
            <div class="item" *ngFor="let address of suggestedAddress"
                    (click)="selectedItem(address)">
                            {{address}}
            </div>
          </div>
    </div>`,
  styles: [`
      * { box-sizing: border-box; }
        body {
          font: 16px Arial;
        }
        .fieldSize{
          width: 100%;
        }
        .autocomplete {
          /*the container must be positioned relative:*/
          position: relative;
          display: inline-block;
        }
        input {
          border: 1px solid transparent;
          background-color: #f1f1f1;
          padding: 10px;
          font-size: 16px;
        }
        input[type=text] {
          background-color: #f1f1f1;
          width: 100%;
        }
        input[type=submit] {
          background-color: DodgerBlue;
          color: #fff;
        }
        .autocomplete-items {
          position: absolute;
          border: 1px solid #d4d4d4;
          border-bottom: none;
          border-top: none;
          z-index: 99;
          /*position the autocomplete items to be the same width as the container:*/
          top: 100%;
          left: 0;
          right: 0;
        }
        .autocomplete-items div {
          padding: 10px;
          cursor: pointer;
          background-color: #fff;
          border-bottom: 1px solid #d4d4d4;
        }
        .autocomplete-items div:hover {
          /*when hovering an item:*/
          background-color: #e9e9e9;
        }
        .autocomplete-active {
          /*when navigating through the items using the arrow keys:*/
          background-color: DodgerBlue !important;
          color: #ffffff;
        }
  `]
})
export class AmAutocompleteNg6LibComponent implements OnInit {

  @Input() address: String = '';
  @Input() placeholder: String = 'Country ';
  @Output() selectedAddress = new EventEmitter<String>();
  suggestedAddress = [];
  showList: Boolean = false;

  constructor(private amAutocompleteNg6LibService: AmAutocompleteNg6LibService) { }

  ngOnInit() { }

  doSearch(term) {
    this.showList = true;
    this.amAutocompleteNg6LibService.doSearch(term, (suggestions) => {
      //console.log('suggestions : ', suggestions);
      this.suggestedAddress = suggestions;
    });
  }

  selectedItem(selectedAddress) {
    console.log('-> ', selectedAddress);
    this.address = selectedAddress;
    this.selectedAddress.emit(selectedAddress);
    this.showList = false;
  }

  focusLost() {
    setTimeout(function () { // use set timeout to give time to select address before hidding a list
      console.log('focus lost');
      this.showList = false;
    }, 500);
  }

  onFocus() {
    console.log('focus');
    this.showList = true;
  }
}
