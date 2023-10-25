import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError, map } from 'rxjs';
import { FetchAllPokemonResponse, Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlEndPoint:string = 'https://pokeapi.co/api/v2/pokemon';
  //private httpHeaders = new HttpHeaders({'Content-Type': 'application/json' });

  constructor(
    private http:HttpClient, private router:Router
  ) { }

  getPokemones(): Observable<Pokemon[]> {
    return this.http.get<FetchAllPokemonResponse>(`${ this.urlEndPoint }?limit=1500`)
              .pipe( 
                map( this.transformSmallPokemonIntoPokemon )
              )
  }

  private transformSmallPokemonIntoPokemon( resp: FetchAllPokemonResponse ): Pokemon[] {

    const pokemonList: Pokemon[] = resp.results.map( poke => {

      const urlArr = poke.url.split('/');
      const id  = urlArr[6];
      const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`;
      const habilidad = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`;
      const defensa = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`;
      const experiencia = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`;
      const altura = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`;

      return {
        id,
        imagen,
        nombre: poke.name,
        habilidad,
        defensa,
        experiencia,
        altura
      }
    })

    return pokemonList;
  }
  //Traer pokemon
  getPokemon(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e=>{
        return throwError(e);
      })
    );
  }

}
