import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Circuit } from '../circuit-list/Circuit';

@Component({
  selector: 'app-sumador',
  templateUrl: './sumador.component.html',
  styleUrl: './sumador.component.scss'
})
export class SumadorComponent implements OnInit {
  constructor(){}
  

  @Input()
  cantidad!: number;
  @Input()
  maximo!: number;
  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>;

  upQuantity(): void{
    if(this.cantidad < this.maximo){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  downQuantity(): void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  changeQuantity(event: { target: any; }):void {
    // event.preventDefault();
    // console.log(event.target);
    this.cantidadChange.emit(this.cantidad);
  }

  ngOnInit(): void {
  }
}
