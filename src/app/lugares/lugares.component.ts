import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  constructor(){
  }
  title = 'PlatziSquare';
  lugares:any=[
    {id: 1, plan:'pagado', cercania:1, distancia:10, active: true, nombre:'Floreria la Gardenia'},
    {id: 2, plan:'gratuito', cercania:1, distancia:1.8, active: true, nombre:'Donas la pasadita'},
    {id: 3, plan:'gratuito', cercania:2, distancia:3.5, active: false, nombre:'Veterinaria Huellitas Felices'},
    {id: 4, plan:'pagado', cercania:2, distancia:5, active: true, nombre:'Shupa shots'},
    {id: 5, plan:'gratuito', cercania:3, distancia:10, active: true, nombre:'BurgerKing'}    
  ];
  personas:any=[
    {nombre:"Julian R", edad:"22"},
    {nombre:"Alejandro A", edad:"17"},
    {nombre:"Alejandro C", edad:"15"},
    {nombre:"Wilmar G", edad:"26"}
  ]
  lat:number = 6.1872172;
  lng:number = -75.5084285;
}