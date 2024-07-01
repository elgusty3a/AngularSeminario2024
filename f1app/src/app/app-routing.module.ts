import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component';
import { ShopComponent } from './shop/shop.component';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
