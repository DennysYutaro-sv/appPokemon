import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent implements OnInit {

  pokemon:any;

  constructor(
    private primengConfig: PrimeNGConfig,
    public pokemonService : PokemonService,
    private router:Router,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPokemon();
    this.primengConfig.ripple = true;
  }

  getPokemon():void{
    this.activatedRouter.params.subscribe(
      params => {
        let id = params['id'];
        if(id){
          this.pokemonService.getPokemon(id).subscribe(
            (pokemon) => {
              this.pokemon = pokemon;
            }
          )
        }
      }
    );
  }

}
