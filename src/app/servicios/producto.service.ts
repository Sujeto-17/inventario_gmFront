import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicio
 {

  private urlBase = "http://localhost:8080/inventario";
  
  constructor(private clienteHttp: HttpClient){}

  obtenerProductosLista(): Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }
  
  agregarProducto(producto:Producto): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, producto);
  }

  obtenerProductoPorId(id: number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }
}
