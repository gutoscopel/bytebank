import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() transferindoOut = new EventEmitter<any>();

  valor: number = 123;
  destino: number = 456;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Transferir ' + this.valor + ' para ' + this.destino);

    // this.transferindoOut.emit(valEmitir); //propagar o valor
    const valEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.clearFields();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
    // this.clearFields();
  }

  clearFields() {
    this.destino = 0;
    this.valor = this.destino;
  }
}
