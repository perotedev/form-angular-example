import { ClienteInterface } from './../shared/cliente-interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponent implements OnInit {
  @Output() clienteCriado = new EventEmitter<ClienteInterface>();
  
  public formExample: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initFormExample();
  }

  private initFormExample(): void {
    this.formExample = this.formBuilder.group({
      nome: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.nullValidator]),
      email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email, Validators.nullValidator]),
      telefone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(9), Validators.nullValidator]),
      cpf: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.nullValidator]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.nullValidator])
    });
  }

  public sendForm($event:Event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.clienteCriado.emit(this.formExample.value);
  }
}
