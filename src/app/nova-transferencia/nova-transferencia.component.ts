import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number = 123;
  destino: number = 456;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log("Transferir " + this.valor + " para " + this.destino);
  }

}
