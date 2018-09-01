import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem = '';

  onSlectedCountry(slectedItem) {
    this.selectedItem = slectedItem;
  }

}
