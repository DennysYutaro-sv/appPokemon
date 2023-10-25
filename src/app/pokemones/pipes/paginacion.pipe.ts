import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../pokemon';

@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {

  transform(pokemones: Pokemon[], pagina:number = 0): Pokemon[] {
    return pokemones.slice(pagina,pagina+6);
  }

}
