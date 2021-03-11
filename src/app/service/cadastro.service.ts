import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  baseUrl = "http://localhost:3000/cadastro"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  read(): Observable<cadastro[]> {
    return this.http.get<cadastro[]>(this.baseUrl)
  }
  // TO DO
  // delete(nome: string): Observable<cadastro[]> {
  //   const url = `${this.baseUrl}/${nome}`;
  //   return this.http.delete<cadastro[]>(url)
  //     ;
  // }
}
export interface cadastro {
  img: string,
  nome: string;
  email: string;
  contato: any;
  estado: string;
  action: string;
}
