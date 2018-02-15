import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar:any = {};
  constructor(private lugaresServices: LugaresService){

  }

  guardarLugar(){
    var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    this.lugaresServices.obtenerGeoData(direccion).subscribe((result) => {
      //debugger;
      this.lugar.lat = result.json().results[0].geometry.location.lat;
      this.lugar.lng = result.json().results[0].geometry.location.lng;
      this.lugar.id = Date.now();
      this.lugaresServices.guardarLugar(this.lugar);
      alert('Negocio guardado con éxito!');
      this.lugar={};
    });
  }
}