import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsAPIurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=70fa040579be4315a33c218f7dbfb40d";
  //topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl) 
  }
}
