import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../model/producto.model';
import { ProductoServicio } from '../servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  imports: [FormsModule],
  templateUrl: './agregar-producto.html',
  styleUrl: './agregar-producto.css'
})
export class AgregarProducto {
  producto: Producto= new Producto();

  private productoServicio = inject(ProductoServicio);
  private enrutador = inject(Router);

  onSumit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoServicio.agregarProducto(this.producto).subscribe({
      next:(datos) => this.irListaProductos(),
      error: (error) => console.error("Error al insertar producto: ",error)
    })
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos']);
  }
}
