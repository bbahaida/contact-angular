import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ContactService{
  constructor(private http:Http){}
  getContact(mc:string,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherContacts?mc="+mc+"&size="+size+"&page="+page)
      .map(resp=>resp.json());
  }
}

