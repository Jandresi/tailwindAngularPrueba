import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PruebaContenidoComponent } from './components/prueba-contenido/prueba-contenido.component';
import { PruebaTablaComponent } from './components/prueba-tabla/prueba-tabla.component';
import { PruebaFormularioComponent } from './components/prueba-formulario/prueba-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PruebaContenidoComponent,
    PruebaTablaComponent,
    PruebaFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
