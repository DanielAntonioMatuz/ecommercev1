import { Component, OnInit } from '@angular/core';
import {Producto} from "../../modelos/Producto";
import {ServicioService} from "../../service/servicio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  producto:Producto[];
  constructor(private service:ServicioService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos().subscribe(
      data=>{
        this.producto=data;
        console.log(this.producto)
      }
    )
  }

}

