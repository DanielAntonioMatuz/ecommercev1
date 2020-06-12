import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { CartComponent } from './components/cart/cart.component';
import { Error404Component } from './components/error404/error404.component';
import {FormsModule} from "@angular/forms";
import {ServicioService} from "./service/servicio.service";
import {HttpClientModule} from "@angular/common/http";
import { PagoComponent } from './components/pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    Error404Component,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
