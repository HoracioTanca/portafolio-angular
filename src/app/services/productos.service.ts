import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-portfolio-eb7da.firebaseio.com/productos_idx.json').subscribe( (res: Producto[]) => {
        console.log(res);
        this.productos = res;
        this.cargando = false;
        resolve();
      });

    });
  }

  getProducto(id: string){
    return this.http.get(`https://angular-portfolio-eb7da.firebaseio.com/productos/${id}.json`);
  }

  buscarProductosPorTexto(texto: string) {

    if(this.productos.length === 0) {
      // Esperar a que esten cargados los productos
      this.cargarProductos().then( () => {
        // Esto se va a ejecutar DESPUES(then) de tener los productos
        // Aplicamos filtro:
        this.filtrarProductos(texto);
      });
    } else {
      // APlicar el filtro
      this.filtrarProductos(texto);
    }

  }

  private filtrarProductos( texto: string ){
    // console.log(this.productos);
    this.productosFiltrado = [];

    texto = texto.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(texto) >= 0 || tituloLower.indexOf(texto) >= 0 ) {
        this.productosFiltrado.push(prod);
      }

    });
  }
}
