import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {ContactService} from '../../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  pageContact:any;
  mc:string="";
  page:number=0;
  size:number=2;
  pages:Array<number>;
  currentPage: number=0;
  constructor(public contactService:ContactService) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    this.contactService.getContact(this.mc,this.page,this.size)
      .subscribe(data=>{
        this.pageContact=data;
        this.pages=new Array<number>(data.totalPages);
      }, err=>{
        console.log(err);
      });
  }

  chercher() {
    this.doSearch();
  }
  goto(page:number){
    this.page=page;
    this.currentPage=page;
    this.doSearch();
  }
}
