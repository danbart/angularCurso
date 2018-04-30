import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})

export class ContactoComponent{
  public titulo = "Pagina de contacto del sitio";
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    //envio un parametro a traves de una funcion de flecha y no de calvac(fuciones tradicionales)
    this._route.params.forEach((params: Params) => {
    //page es nuestra ruta o id colocado en el archivo de rutas
        this.parametro = params['page'];
    });
  }
  redirigir(){
    this._router.navigate(['/contacto','utzapp.easy.es'])
  }
  redirigir2(){
    this._router.navigate(['/pagina-principal'])
  }
}
