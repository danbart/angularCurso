import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'empleados-tag',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
  public titulo = 'Componente Empleados';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor(){
    this.empleado = new Empleado('Juan Petronilo', 25, 'concerje', true);
    this.trabajadores =[
      new Empleado('Roberto Alejandro', 29, 'Programador', true),
      new Empleado('Claudia Rodriguez', 26, 'Ingeniera', true),
      new Empleado('Andrea de Leon', 23, 'Secretaria', false)
    ];
    this.trabajador_externo = true;
    this.color = "blue";
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    this.empleado = new Empleado('Danilo Fernando', 45, 'Cocinero', true);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }
}
