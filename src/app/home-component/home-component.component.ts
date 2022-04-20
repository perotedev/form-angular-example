import { ClienteInterface } from './../shared/cliente-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  public showCliente: boolean = false;
  public clienteCriado: ClienteInterface;

  constructor() { }

  ngOnInit() {
  }

  public showClienteData(cliente: ClienteInterface): void {
    this.clienteCriado = cliente;
    this.showCliente = true;
  }
}
