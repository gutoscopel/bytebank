import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private _listaDeTransferencia: any[];
  private _url = 'http://localhost:3000/transferencias';
  public get transferencia(): any[] {
    return this._listaDeTransferencia;
  }
  public set transferencia(value: any[]) {
    this._listaDeTransferencia = value;
  }
  constructor(private httpClient: HttpClient) {
    this._listaDeTransferencia = [];
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this._url);
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this._listaDeTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
