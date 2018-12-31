
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Category } from 'src/app/models/category';
import { SubCategory } from 'src/app/models/subCategory';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';  
const httpOptions = {
  //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  headers : new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductHouseService {
  private customersUrl = 'https://localhost:44318/api/sampledata/CategoryList';  // URL to web api
  private Url = 'https://localhost:44318/api/sampledata/Category';  // URL to web api
  constructor(private http: HttpClient) { }

  addCategory(category: Category): Observable<Category> {
    console.log(category)
    return this.http.post<Category>(this.Url, category, httpOptions);
  }

  getItems(): Observable<Category[]> {
    return this.http.get<Category[]>(this.customersUrl)
  }

 
  //deleteCustomer(customer: Customer | number): Observable<Customer> {
  //  const id = typeof customer === 'number' ? customer : customer.id;
  //  const url = `${this.customersUrl}/${id}`;

  //  return this.http.delete<Customer>(url, httpOptions);
  //}

  //updateCustomer(customer: Customer): Observable<any> {
  //  return this.http.put(this.customersUrl, customer, httpOptions);
  //}
}
