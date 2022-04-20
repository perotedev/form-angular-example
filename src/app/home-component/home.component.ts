import { ClienteInterface } from '../shared/cliente-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
