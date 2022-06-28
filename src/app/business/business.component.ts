import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api:NewsapiservicesService) { }

  businessNewsDisplay:any = [];

  ngOnInit(): void {  
    this.api.techNews().subscribe((result)=>{
      console.log(result);
      this.businessNewsDisplay = result.articles;
    })
  }

}
