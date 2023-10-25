import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//PAra consumir peticiones http
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { DetallePokemonComponent } from './pokemones/detalle-pokemon/detalle-pokemon.component';
import { PaginacionPipe } from './pokemones/pipes/paginacion.pipe';

registerLocaleData(localeES,'es');

const routes: Routes = [
  {path:'',redirectTo: '/pokemones',pathMatch: 'full'},
  {path:'pokemones', component:PokemonesComponent},
  {path:'pokemon/detalle/:id', component:DetallePokemonComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    DetallePokemonComponent,
    PaginacionPipe,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LOCALE_ID,useValue: 'es'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
