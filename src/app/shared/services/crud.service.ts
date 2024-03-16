import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const apiURL = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getAll(collectionName:any) {
    return this.http.get(`${apiURL}/${collectionName}`);
  }

  createPost(data:any,collectionName:any ): Observable<any> {
    return this.http.post(`${apiURL}/${collectionName}`, data, httpOptions)
  }

}
