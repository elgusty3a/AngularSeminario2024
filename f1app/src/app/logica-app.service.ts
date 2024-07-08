import { Injectable } from '@angular/core';
import { Circuit } from './circuit-list/Circuit';

@Injectable({
  providedIn: 'root'
})
export class LogicaAppService {

  constructor() { }
  hoy = new Date();
  circuits: Circuit[] =[];

  crearFechaConString(fecha: string): Date {
    const fechaEvento = new Date(fecha);
    if (isNaN(fechaEvento.getTime())) {
      throw new Error('Fecha inválida');
    }
    return fechaEvento;
  }

  eventoPasado(circuit:Circuit):boolean {
    return (this.crearFechaConString(circuit.date_race) < (this.hoy));
  }
}
