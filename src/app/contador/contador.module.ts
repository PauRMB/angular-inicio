import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorComponent } from './componentes/contador/contador.component';

/* Este archivo es un agrupador en el cual se va a tener
 * La definicion de mis componentes que pertenecen al contador
 * un modulo no necesita implementar
 */

/*
 * Para declararlo como modulo en Angular se añade el siguiente decorador
 * Este modulo pretende agrupar toda la funcionalidad de contador entonces
 * se declara con declarations:
 * Para que se pueda consumir afuera de su ambito este modulo se debe exportar
 * y se declara en exports:
 */
@NgModule({
    declarations:[ ContadorComponent ],
    exports:[ContadorComponent],
    imports:[CommonModule],
  })


export class ContadorModule
 {

 }
