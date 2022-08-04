import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  // destino: number;
  // valor: number;
  // tranferencia: any {};
  // transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    // console.log("Resultado:" + $event.valor + " " +$event.destino);
    // console.log($event)
    // this.valor= $event.valor;
    // // this.destino= $event.destino;
    // const transferencia = { ...$event, data: new Date() };
    // this.transferencias.push(transferencia);
    this.service.adicionar($event);
  }
}
