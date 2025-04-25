import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  /*URL do backend*/
  baseUrl = "http://localhost:8080/produtos"

  /*construtor do serviço, onde nós injetamos p MatSnackBar*/
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void
  {
    this.snackBar.open(msg, 'X',
      {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
  }
  //metodo 
  create(product: Product): Observable<Product>
  {
    return this.http.post<Product>(this.baseUrl, product)
  }
  //metodo para carregar os 
  read(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl)
  }
  readById(proId: string): Observable<Product>
  {
    const url = `${this.baseUrl}/${proId}`
    return this.http.get<Product>(url)
  }
  update(product: Product): Observable<Product>
  {
    const url = `${this.baseUrl}/${product.proId}`
    return this.http.put<Product>(url, product)
  }
  delete(proId: number): Observable<Product>
  {
    const url = `${this.baseUrl}/${proId}`
    return this.http.delete<Product>(url)
  }
}
