import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
@Injectable()
export class LugaresService{
  API_ENDPOINT = 'https://platzisquare-1518555588141.firebaseio.com';
    lugares:any=[
        {id: 1, plan:'pagado', cercania:1, distancia:10, active: true, nombre:'Floreria la Gardenia'},
        {id: 2, plan:'gratuito', cercania:1, distancia:1.8, active: true, nombre:'Donas la pasadita'},
        {id: 3, plan:'gratuito', cercania:2, distancia:3.5, active: false, nombre:'Veterinaria Huellitas Felices'},
        {id: 4, plan:'pagado', cercania:2, distancia:5, active: true, nombre:'Shupa shots'},
        {id: 5, plan:'gratuito', cercania:3, distancia:10, active: true, nombre:'BurgerKing'}    
      ];

      constructor(private afDB:AngularFireDatabase, private http: Http){}

      public getLugares(){
          //return this.afDB.list('lugares/'); // Obtener lugares con sockets
          return this.http.get(this.API_ENDPOINT+'/.json').map((resultado)=>{
            const data = resultado.json().lugares;
            return data;
          });
      }

      public buscarLugar(id){
        return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
      }

      public guardarLugar(lugar){
        console.log(lugar);
        //this.afDB.database.ref('lugares/'+lugar.id).set(lugar); //Guardar con sockets
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers}).subscribe();
      }

      public editarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
      }

      public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
      }

      public getLugar(id){
        return this.afDB.object('lugares/'+id);
      }
}