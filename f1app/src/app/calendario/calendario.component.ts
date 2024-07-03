import { Component, OnInit, Input } from '@angular/core';
// import { Circuit } from '../circuit-list/Circuit';
import { F1MockService } from '../f1-mock.service';
// import { CircuitListComponent } from '../circuit-list/circuit-list.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent implements OnInit{
  // constructor(){};

  hoy = new Date();
  circuits: any[];

  constructor(private f1MockService: F1MockService) { }

  ngOnInit() {
    this.circuits = this.f1MockService.getMockDataCircuits();
  }


  // @Input()
  // circuit: Circuit;
  // @Input()
  // hoy: Date;
  


  // ngOnInit(): void {
    
  // }
}
