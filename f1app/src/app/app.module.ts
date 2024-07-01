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

@NgModule({
  declarations: [
    AppComponent,
    CircuitListComponent,
    SumadorComponent,
    AboutComponent,
    InicioComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
