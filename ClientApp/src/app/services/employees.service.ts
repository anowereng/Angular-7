
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/Item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private customersUrl = 'https://localhost:44318/api/sampledata/products';  // URL to web api
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.customersUrl)
  }

  //getCustomer(id: number): Observable<Customer> {
  //  const url = `${this.customersUrl}/${id}`;
  //  return this.http.get<Customer>(url);
  //}

  //addCustomer(customer: Customer): Observable<Customer> {
  //  return this.http.post<Customer>(this.customersUrl, customer, httpOptions);
  //}

  //deleteCustomer(customer: Customer | number): Observable<Customer> {
  //  const id = typeof customer === 'number' ? customer : customer.id;
  //  const url = `${this.customersUrl}/${id}`;

  //  return this.http.delete<Customer>(url, httpOptions);
  //}

  //updateCustomer(customer: Customer): Observable<any> {
  //  return this.http.put(this.customersUrl, customer, httpOptions);
  //}
}

//import { Component, OnInit, Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable'

//@Injectable()

//export class EmployeeService {

//  constructor(private http: HttpClient) { }



//}
