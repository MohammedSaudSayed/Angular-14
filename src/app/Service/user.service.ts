import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public getJsonvalue: any;
  // public postJsonvalue: any;
  constructor(private http:HttpClient) { 

  }


  ProceedLogin(inputdata:any) 
  {
    return this.http.post('https://jsonplaceholder.typicode.com/posts/1',inputdata);
  }
}