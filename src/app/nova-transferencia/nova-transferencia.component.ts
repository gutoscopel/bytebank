import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() transferindoOut = new EventEmitter<any>();

  valor: number = 123;
  destino: number = 456;

  constructor() {}

  ngOnInit(): void {}

  transferir() {
    // console.log('Transferir ' + this.valor + ' para ' + this.destino);
    const valEmitir = {valor: this.valor, destino: this.destino};
    this.transferindoOut.emit(valEmitir); //propagar o valor
  }
}
