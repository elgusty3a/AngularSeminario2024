import { Component, OnInit, Input } from '@angular/core';
// import { Circuit } from '../circuit-list/Circuit';
// import { F1MockService } from '../f1-mock.service';
import { F1AppDataService } from '../f1-app-data.service';
import { Circuit } from '../circuit-list/Circuit';
// import { CircuitListComponent } from '../circuit-list/circuit-list.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent implements OnInit{
  // constructor(){};

  hoy = new Date();
  circuits: Circuit[] =[];

  constructor(
    // private f1MockService: F1MockService,
    private f1AppDataService: F1AppDataService) { }

  ngOnInit() {
    // this.circuits = this.f1MockService.getMockDataCircuits();
    this.f1AppDataService.getF1DataCircuits().subscribe(circuits => this.circuits = circuits);
  }


  // @Input()
  // circuit: Circuit;
  // @Input()
  // hoy: Date;
  


  // ngOnInit(): void {
    
  // }
}
