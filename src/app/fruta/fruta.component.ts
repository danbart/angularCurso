import{ Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
  public nombre_componente  = 'Componente de Fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
  public nombre:string;
  public edad:number;
  public trabajos:Array<string> = ['carpintero', 'albañil', 'Fontanero' ];
  comodin:any;

  constructor(){
    this.nombre = 'Danilo Solórzano';
    this.edad = 28;
    this.comodin = 'Comodin de texto';
  }

  ngOnInit(){


    //Variables y alcance
    var uno = 8;
    var dos = 15;

    if(uno===8){
      let uno = 3;
      var dos = 88;
      console.log("Dentro del if " + uno);
    }
    console.log("Fuera del if " + uno);
  }

}
