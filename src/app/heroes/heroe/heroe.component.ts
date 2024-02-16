import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-heroes-heroe',
    standalone: true,
    imports: [],
    templateUrl: './heroe.component.html',
    styleUrl: './heroe.component.css'
  })


export class HeroeComponent
  {
 // propiedades de la clase con sus valorea iniciales
    public nameH: string = 'Ironman';
    public age: number = 45;
    public nameP?: string = 'Tony Stark';

 // gets y sets == metodos de clase
    getCapitalName(): string
     {
       return 'Nueva York'.toUpperCase();
     }

 // metodo
    getHeroDesc(): string
     {
       return `${ this.nameP } - ${ this.age }`;
     }

 // metodo para cambiar el nombre del heroe
    cambiarNombreH(): void
     {
       this.nameH = 'Canario Negro';
       this.nameP = 'Lisa';
     }

 // metodo para cambiar la edad del heroe
    cambiarEdadH(): void
     {
       this.age = 33;
     }

 // metodo de restablecer
    resetForm(): void
     {
      this.nameH = 'Ironman';
      this.age = 45;
      this.nameP = 'Tony Stark';
      document.querySelector('h2')!.innerHTML = '<h2>Etiqueta1 h2</h2>';
     }

 // metodo para cambiar las etiquetas h1
    cambiarH2(): void
     {
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   Busca la etiqueta - selector y cuando
     *  encuentra el primero es el que modifica
     * * * * * * * * * * * * * * * * * * * * * * */

    /* ! => significa que el elemento h2 => siempre va existir */
       document.querySelector('h2')!.innerHTML = '<h2>Se modifica solo el primer h2</h2>';

       document.querySelectorAll('h2')!.forEach( element =>
          {
             element.innerHTML = '<h2> Se modifican todos los h2 desde Angular</h2>';
          })
     }

  }

//const hero1 : HeroeComponent = [nameH, age, ];



