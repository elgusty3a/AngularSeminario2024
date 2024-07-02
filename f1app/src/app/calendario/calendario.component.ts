import { Component, OnInit, Input } from '@angular/core';
import { Circuit } from '../circuit-list/Circuit';
// import { CircuitListComponent } from '../circuit-list/circuit-list.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent implements OnInit{
  constructor(){};

  @Input()
  circuit!: Circuit;
  @Input()
  hoy!: Date;
  


  ngOnInit(): void {
  }
}
