import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged = false;

  constructor(public infoService: InfoPaginaService, private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto(texto: string) {
    if (texto.length < 1) {
      return;
    }
    this.router.navigate(['/buscar', texto]);
  }
}
