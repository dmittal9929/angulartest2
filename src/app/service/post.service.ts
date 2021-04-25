import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { 

  }
  getAlldata():Observable<object>{
    return this.http.get('https://abhishekapi20210422122702.azurewebsites.net/api/depts')
  }
  getById(id:number):Observable<object>{
    return this.http.get('https://abhishekapi20210422122702.azurewebsites.net/api/depts/'+id)
  }

}
