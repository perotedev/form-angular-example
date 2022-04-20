import { ClienteInterface } from '../shared/cliente-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'show-cliente-component',
  templateUrl: './show-cliente-component.component.html',
  styleUrls: ['./show-cliente-component.component.css']
})
export class ShowClienteComponent implements OnInit {
  @Input() cliente: ClienteInterface;

  constructor() { }

  ngOnInit() {
  }
}
