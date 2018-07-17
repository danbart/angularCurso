import  { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html'
})
export class PlantillasComponent{
  public titulo;
  public administrador;
  public dato_externo = "Danilo Solórzano";
  public identity = {
    id:1,
    web: 'Danilo Solórzano',
    tematica: 'Desarrollo Web'
  }
  public datos_del_hijo;

  constructor( ){
    this.titulo = "Plantillas ngTemplate en Angular";
    this.administrador = true;
  }

  cambiar(value){
    this.administrador = value;
  }

  recibirDatos(event){
    console.log(event)
    this.datos_del_hijo = event;
  }

}
