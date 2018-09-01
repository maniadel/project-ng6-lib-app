import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmAutocompleteNg6LibService {

  apiRoot: String = 'https://restcountries.eu';

  constructor(private http: HttpClient) { }

  doSearch(inputText: String, callback: any) {
      this.http.get(`${this.apiRoot}/rest/v2/name/${inputText}`, { observe: 'response' }).subscribe(response => {
        if (response.status === 200) {
          const result = Object.keys(response.body).map(key => {
            return response.body[key].name;
          });
          callback(result);
        } else {
          callback([]);
        }
      });
  }
}
