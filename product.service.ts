import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = '';

  constructor(private http: HttpClient) { }

  uploadImage(formData) {
    return ajax.post(`${this.apiUrl}api/upload`, formData);
  }

  deleteImage(formData) {
    return this.http.post<any>(`${this.apiUrl}api/deleteImage`, formData)
    
  }

  saveProduct(formData) {
    return this.http.post<any>(`${this.apiUrl}api/saveProduct`, formData)
    
  }
}