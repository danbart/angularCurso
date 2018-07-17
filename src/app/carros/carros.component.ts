import  { Component } from '@angular/core';
import { Carros } from './carros';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'carros',
  templateUrl: './carros.component.html',
  providers: [PeticionesService]
})
export class CarrosComponent{
  public carro: Carros;
  public carros:Array<Carros>;
  public articulos;

  constructor(
    private _peticionesService: PeticionesService
  ){
    this.carro = new Carros("","","");
    this.carros = [
      new Carros("Seat Panda","120","Blanco"),
      new Carros("Renault Clio","110","Rojo"),
      new Carros("Toyota","200","Verde")
    ];
  }

  ngOnInit(){
    //se utiliza el metodo subscribe para capturar el objeto o el error del rest
    this._peticionesService.getArticulos().subscribe(
      result =>{
        this.articulos = result;
        if(!this.articulos){
          console.log("Error en el Servidor");
        }
      },
      error => {
        var errorMessage= <any>error;
        console.log(errorMessage);
      }
    );
  }

  onSubmit(){
    this.carros.push(this.carro);
    this.carro = new Carros("","","");
  }

}
