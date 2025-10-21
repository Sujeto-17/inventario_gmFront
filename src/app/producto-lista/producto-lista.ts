import { Component, inject } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoServicio } from '../servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.html',
  styleUrl: './producto-lista.css'
})
export class ProductoLista {
  productos!: Producto[];

  private productoServicio = inject(ProductoServicio);
  private enrutador = inject(Router);

  ngOnInit() {
    // Cargar los productos
    this.obtenerProductos();
  }

  private obtenerProductos(): void { 
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
        this.productos = datos;
      },
      error:(error)=> console.error("Error al obtener los productos", error)
    });
  }

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id]);
  }
}
