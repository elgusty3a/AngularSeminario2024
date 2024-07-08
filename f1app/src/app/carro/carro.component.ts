import { Component, OnInit } from '@angular/core';
import { F1ShopService } from '../f1-shop.service';
import { Circuit } from '../circuit-list/Circuit';
import { Observable } from 'rxjs';
import { F1MockService } from '../f1-mock.service';
// import { F1AppDataService } from '../f1-app-data.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.scss'
})
export class CarroComponent implements OnInit{
  
  listaCompras: Circuit[] = this.f1MockService.getMockDataCircuits();

  // listaCompras = this.f1AppDataService.getF1DataCircuits();
  listaCompras$: Observable<Circuit[]>;
  circuits: Circuit[] = [];
  
  constructor(
    private f1MockService: F1MockService,
    // private f1AppDataService: F1AppDataService,
    private shopService: F1ShopService,
  ){
    this.listaCompras$ = shopService.listaCompras.asObservable();
  }
  ngOnInit() {
    this.circuits = this.f1MockService.getMockDataCircuits();
  }
  
  quitarDeCarro(circuit: Circuit) : void{
    this.shopService.quitarDeCarro(circuit);
    this.actualizarStock(circuit);
  }
  actualizarStock(circuit: Circuit) : void{
    let indexActualizacion = this.listaCompras.findIndex((v1) => v1.name === circuit.name);
    let listaActualizada: Circuit[] = this.listaCompras;
    listaActualizada[indexActualizacion].stock+=circuit.quantity;
    this.listaCompras = listaActualizada;
  }

  total(){
    return this.shopService.sumaCarro;
  }
  


}
