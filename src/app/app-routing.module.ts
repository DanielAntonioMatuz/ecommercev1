import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ProductoComponent} from "./components/producto/producto.component";
import {CartComponent} from "./components/cart/cart.component";
import {Error404Component} from "./components/error404/error404.component";
import {PagoComponent} from "./components/pago/pago.component";

const app_routes: Routes = [
  {path: 'home', component: InicioComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'cart', component: CartComponent},
  {path: 'pago', component: PagoComponent},
  {path: '404', component: Error404Component},
  {path: '**', pathMatch:'full', redirectTo:'404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot( app_routes, {useHash: true} )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
