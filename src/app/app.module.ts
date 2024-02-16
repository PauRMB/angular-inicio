
// Recomendaciones
// 1.- importaciones propias de Javascript -> si se tienen
// 2.- importaciones propias de Angular
// 3.- librerias de terceros
// 4.- Nuestro codigo


// Importaciones propias de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Modulos de este proyecto
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';


// Componentes de este proyecto
import { AppComponent } from './app.component';

/*
 * Los modulos siempre se van a importar en imports:
 * para que esten accesibles para todo el proyecto
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
