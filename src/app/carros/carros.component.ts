import  { Component } from '@angular/core';
import { Carros } from './carros'

@Component({
  selector: 'carros',
  templateUrl: './carros.component.html'
})
export class CarrosComponent{
  public carro: Carros;
  public carros:Array<Carros>;

  constructor(){
    this.carro = new Carros("","","");
    this.carros = [
      new Carros("Seat Panda","120","Blanco"),
      new Carros("Renault Clio","110","Rojo"),
      new Carros("Toyota","200","Verde")
    ];
  }

  onSubmit(){
    console.log(this.carro);
  }

}
