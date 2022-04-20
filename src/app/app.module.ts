import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form-component/form-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShowClienteComponent } from './show-cliente-component/show-cliente-component.component';

@NgModule({
  declarations: [			
    AppComponent,
      FormComponent,
      HomeComponentComponent,
      ShowClienteComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
