import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{
  public nommbre_prenda = 'Pantalones Vaqueros';
  public coleccion_ropa = ['Pantalones Blancos', 'Camiseta Roja'];

  prueba(nommbre_prenda){
    return nommbre_prenda;
  }

  addRopa(nommbre_prenda:string):Array<string>{
    this.coleccion_ropa.push(nommbre_prenda);
    return  this.getRopa();
  }

  deletRopa(index:number){
    //slipce es para eliminar y se le envia cuantos vamos a eliminar desde el enviado
    this.coleccion_ropa.splice(index,1);
    return this.getRopa();
  }

  getRopa():Array<string>{
    return this.coleccion_ropa;
  }


}
