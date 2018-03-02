import { Component, trigger, state, style } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d'
      }))
    ])
  ]
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
    lugaresService.getLugares().subscribe(lugares => {
      //this.lugares = lugares; // Traer lugares con sockets
      this.lugares = lugares;
      var me = this;
      me.lugares = Object.keys(me.lugares).map(function (key) {return me.lugares[key]; }); // Object to Array
    }, error => {
      console.log(error);
      alert('Tenemos dificultades tecnicas, disculpe las molestias, Error: '+error.statusText);
    });
  }
}