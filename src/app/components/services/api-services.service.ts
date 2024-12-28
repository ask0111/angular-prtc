import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http:HttpClient) { }

  fetchData(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

}
