import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vespa } from '../models/vespa';

@Injectable({
  providedIn: 'root'
})
export class VespaService {
  private baseurl="http://localhost:8081/api/v1/findByemail/nikki@gmail.com"
  constructor(private http:HttpClient) { 

  }
  submitting():Observable<Vespa[]>{

     return this.http.get<Vespa[]>(this.baseurl)
  }
}
