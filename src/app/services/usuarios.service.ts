import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: Usuario[] = [];

  constructor(private http: HttpClient) {
    this.cargarUsuarios();
   }

   private cargarUsuarios(){
     this.http.get('https://angular-portfolio-eb7da.firebaseio.com/usuarios.json').subscribe( (res: Usuario[]) => {
        console.log(res);
     });
   }
}
