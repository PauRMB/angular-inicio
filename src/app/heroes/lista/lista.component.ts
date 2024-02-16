import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-heroes-lista',
    standalone: true,
    imports: [],
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.css'
  })


export class ListaComponent {
    public heroeBorrado?: string;
    public heroNames: string[] =
      ['Ironman', 'Canario Negro', 'Hulk', 'Thor', 'LVN'];

    borraUltH():void
      {
        //const heroeBorrado = this.heroNames.pop();
        this.heroeBorrado = this.heroNames.pop();
      }
 }
