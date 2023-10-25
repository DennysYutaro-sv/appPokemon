import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css'],
  providers: [MessageService]
})
export class PokemonesComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private pokemonService:PokemonService,
    private messageService: MessageService
  ) { }

  pokemon:any;
  pokemones:any[]=[];
  pagina:number = 0;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getListPokemones();
  }

  getListPokemones(){
      this.pokemonService.getPokemones().subscribe(
        (response)=>{
          this.pokemones=response;
          console.log(this.pokemones);
          //this.pokemones.push(this.pokemon)
        }
      )
    
  }

  nextPagina(){
    this.pagina +=6;
  }

  previousPagina(){
    this.pagina +=6;
  }

}
