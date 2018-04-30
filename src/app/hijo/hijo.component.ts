import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'componente-hijo',
  template: `

    <strong> Este es el {{title}} </strong>
    <ul>
      <li>{{propiedad_uno}}</li>
      <li>{{propiedad_dos.tematica}}</li>
  </ul>

  <button (click)="enviar()">Enviar</button>
  `
})
export class HijoCompoenet{
  public title: string;
  @Input() propiedad_uno: string;
  @Input('texto') propiedad_dos: string;

  @Output() desde_el_hijo = new EventEmitter();


  constructor(){
    this.title = "Componente Hijo";
  }

  enviar(){
    this.desde_el_hijo.emit({
      nombre: 'Danilo Solórzano',
      web: 'utzapp.com',
      twitter: '@danbart'
    })
  }
}
