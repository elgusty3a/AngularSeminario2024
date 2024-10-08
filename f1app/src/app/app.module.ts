import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircuitListComponent } from './circuit-list/circuit-list.component';
import { SumadorComponent } from './sumador/sumador.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ShopComponent } from './shop/shop.component';
import { CarroComponent } from './carro/carro.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PilotosListComponent } from './pilotos-list/pilotos-list.component';
import { EscuderiasListComponent } from './escuderias-list/escuderias-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CircuitListComponent,
    SumadorComponent,
    AboutComponent,
    InicioComponent,
    CalendarioComponent,
    ShopComponent,
    CarroComponent,
    PilotosListComponent,
    EscuderiasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
