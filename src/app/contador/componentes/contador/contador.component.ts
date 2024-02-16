import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})


export class ContadorComponent{
   // * Propiedades
   public counter: number = 10;


   // * Metodos
   incremetarPor( v:number ): void
    {
      this.counter += v;
    }

   restaurar() :void
    {
      this.counter = 10;
    }
 }

