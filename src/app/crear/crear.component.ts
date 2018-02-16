import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar:any = {};
  id:any = null;
  constructor(private lugaresServices: LugaresService, private route: ActivatedRoute){
    this.id=this.route.snapshot.params['id'];
    if(this.id != 'new'){
      this.lugaresServices.getLugar(this.id).valueChanges().subscribe((lugar) => {
        this.lugar=lugar;
      });
    }
    console.log(this.id);
  }

  guardarLugar(){
    var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    this.lugaresServices.obtenerGeoData(direccion).subscribe((result) => {
      //debugger;
      this.lugar.lat = result.json().results[0].geometry.location.lat;
      this.lugar.lng = result.json().results[0].geometry.location.lng;
      if(this.id != 'new'){
        this.lugaresServices.editarLugar(this.lugar);
        alert('Negocio editado con éxito!');
      }else{
        this.lugar.id = Date.now();
        this.lugaresServices.guardarLugar(this.lugar);
        alert('Negocio guardado con éxito!');
      }
      this.lugar={};
    });
  }
}