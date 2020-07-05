import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../modelos/Producto";

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  constructor(private http:HttpClient) {
  }

   Url='/producto/lista';



  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }
}
