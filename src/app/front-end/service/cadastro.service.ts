import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  [x: string]: any;
  showMessage(msg: string, isErro: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isErro ? ['.msg-erro'] : ['msg-sucess']
    })
  }
  handletError(e: any): Observable<any> {
    console.log(e)
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
  baseUrl = "http://localhost:3000/cadastro"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  read(): Observable<cadastro[]> {
    return this.http.get<cadastro[]>(this.baseUrl)
  }

  delete(nome: string): Observable<cadastro[]> {
    const url = `${this.baseUrl}/${nome}`;
    return this.http.delete<cadastro[]>(url)
      ;
  }
}
export interface cadastro {
  img: string,
  nome: string;
  email: string;
  contato: any;
  estado: string;
  action: string;
}
