import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {
 /*URL do backend*/
  baseUrl = "http://localhost:8080/fPagamentos"

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
  create(formaPagamento: FormaPagamento): Observable<FormaPagamento>
  {
    return this.http.post<FormaPagamento>(this.baseUrl, formaPagamento)
  }
  //metodo para carregar os 
  read(): Observable<FormaPagamento[]>
  {
    return this.http.get<FormaPagamento[]>(this.baseUrl)
  }
  readById(fpgId: string): Observable<FormaPagamento>
  {
    const url = `${this.baseUrl}/${fpgId}`
    return this.http.get<FormaPagamento>(url)
  }
  update(formaPagamento: FormaPagamento): Observable<FormaPagamento>
  {
    const url = `${this.baseUrl}/${formaPagamento.fpgId}`
    return this.http.put<FormaPagamento>(url, formaPagamento)
  }
  delete(fpgId: number): Observable<FormaPagamento>
  {
    const url = `${this.baseUrl}/${fpgId}`
    return this.http.delete<FormaPagamento>(url)
  }
}
