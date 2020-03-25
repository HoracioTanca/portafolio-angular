import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/productoDescripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  productoID: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      // console.log(parametros.id);
      this.productoService.getProducto( parametros.id ).subscribe( (producto: ProductoDescripcion) => {
        this.productoID = parametros.id;
        this.producto = producto;
        console.log(producto);
      });
    });
  }

}
