import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpModule } from '@angular/http';


import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
  public url: string;
  constructor(public _http:Http){
    this.url ="https://jsonplaceholder.typicode.com/posts";
  }
   getPrueba(){
     return "Hola Mundo desde el Servicio";
   }
   //esto devuelve objetos usables en un servisio rest para java script
   //en la funcion de calvac con map capturamos la respuesta y la convertimos a json
   getArticulos(){
     return this._http.get(this.url)
                      .map(res => res.json());
   }

}
