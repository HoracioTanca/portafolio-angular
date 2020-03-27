import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


// tslint:disable-next-line: variable-name
const app_routes: Routes = [
  // Importa MUCHO el orden en que indicamos las rutas (Si yo pongo como primera ruta la "**" todas las rutas me redirijen a 'Home'):
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [
    RouterModule.forRoot( app_routes, { useHash: true } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}