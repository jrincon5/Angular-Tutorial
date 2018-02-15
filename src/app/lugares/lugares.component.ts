import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'PlatziSquare';
  
  personas:any=[
    {nombre:"Julian R", edad:"22"},
    {nombre:"Alejandro A", edad:"17"},
    {nombre:"Alejandro C", edad:"15"},
    {nombre:"Wilmar G", edad:"26"}
  ]
  lat:number = 6.1872172;
  lng:number = -75.5084285;
  lugares= null;
  constructor(private lugaresService: LugaresService){
    lugaresService.getLugares().valueChanges().subscribe(lugares => {
      this.lugares = lugares;
    });
  }
}