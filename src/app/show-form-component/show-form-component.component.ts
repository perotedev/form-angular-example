import { ClienteInterface } from './../shared/cliente-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'show-form-component',
  templateUrl: './show-form-component.component.html',
  styleUrls: ['./show-form-component.component.css']
})
export class ShowFormComponent implements OnInit {
  @Input() cliente: ClienteInterface;

  constructor() { }

  ngOnInit() {
  }
}
