import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { IntegranteEquipo } from '../interfaces/integrante-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: IntegranteEquipo[] = [];
  equipoCargado = false;

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe( (res: InfoPagina) => {
      this.cargada = true;
      this.info = res;
      // console.log(res);
    });
  }

  private cargarEquipo(){
    this.http.get('assets/data/equipo.json').subscribe( (res: IntegranteEquipo[]) => {
      this.equipo = res;
      this.equipoCargado = true;
      // console.log(res);
    });
  }
}
