
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from './models/registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseurl="https://localhost:8085/api/v1/insert"

  constructor(private http:HttpClient) { }
  submit(user:Registration):Observable<any>{
    return this.http.post(this.baseurl,user)
}
}

