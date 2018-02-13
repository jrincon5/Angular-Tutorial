import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any=[
    {active: true, nombre:'Floreria la Gardenia'},
    {active: true, nombre:'Donas la pasadita'},
    {active: false, nombre:'Veterinaria Huellitas Felices'},
    {active: true, nombre:'Shupa shots'},
    {active: true, nombre:'BurgerKing'}    
  ];
  personas:any=[
    {nombre:"Julian R", edad:"22"}
    {nombre:"Alejandro A", edad:"17"}
    {nombre:"Alejandro C", edad:"15"}
    {nombre:"Wilmar G", edad:"26"}
  ]
  lat:number = 6.1872172;
  lng:number = -75.5084285;
  constructor(){
  }
}
