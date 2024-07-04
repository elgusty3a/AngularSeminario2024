import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component';
import { ShopComponent } from './shop/shop.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PilotosListComponent } from './pilotos-list/pilotos-list.component';
import { EscuderiasListComponent } from './escuderias-list/escuderias-list.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'escuderias', component: EscuderiasListComponent},
  {path: 'pilotos', component: PilotosListComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
