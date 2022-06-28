import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //Top heading API url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=70fa040579be4315a33c218f7dbfb40d";
  //topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl) 
  }
  
  //Tech headlines API url
  techHeadlines = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=70fa040579be4315a33c218f7dbfb40d";
  techNews():Observable<any>
  {
    return this._http.get(this.techHeadlines)
  }

  //Business headlines API url
  businessHeadlines = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=70fa040579be4315a33c218f7dbfb40d";
  businessNews():Observable<any>
  {
    return this._http.get(this.businessHeadlines)
  }

  //Sports headlines API url
  sportsHeadlines = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=70fa040579be4315a33c218f7dbfb40d";
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsHeadlines)
  }

}
