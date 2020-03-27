import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { IntegranteEquipo } from '../interfaces/integrante-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = true;

  equipo: IntegranteEquipo[] = [];
  equipoCargado = false;

  constructor(private http: HttpClient) {
    this.cargarInfo();
    console.log(this.equipoCargado);
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe((res: InfoPagina) => {
      this.cargada = true;
      this.info = res;
      // console.log(res);
    });
  }

  private cargarEquipo() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-portfolio-eb7da.firebaseio.com/equipo.json').subscribe((res: IntegranteEquipo[]) => {
        this.equipo = res;
        this.equipoCargado = true;
        // console.log(this.equipoCargado);
        resolve();
      });
    });
  }
}
