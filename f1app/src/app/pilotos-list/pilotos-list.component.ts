import { Component, OnInit } from '@angular/core';
import { Pilotos } from './Pilotos';
import { F1AppDataService } from '../f1-app-data.service';
import { F1MockService } from '../f1-mock.service';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrl: './pilotos-list.component.scss'
})
export class PilotosListComponent implements OnInit {
  pilotos: Pilotos[] = [];

  constructor(
    private f1MockService: F1MockService,
    private f1AppDataService: F1AppDataService
  ){}

  ngOnInit(): void {
    this.pilotos = this.f1MockService.getMockDataPilotos();
    // this.f1AppDataService.getF1DataPilotos().subscribe(pilotos => this.pilotos = pilotos);
  }


}
