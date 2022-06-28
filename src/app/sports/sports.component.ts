import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api:NewsapiservicesService) { }

  sportsNewsDisplay:any = [];

  ngOnInit(): void {
    this.api.sportsNews().subscribe((result)=>
    {
      console.log(result);
      this.sportsNewsDisplay = result.articles;
    })
  }

}
