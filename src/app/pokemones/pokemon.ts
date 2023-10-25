
export interface FetchAllPokemonResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
}


export interface Pokemon {
    id: string;
    nombre: string;
    imagen: string;
    habilidad:string;
    defensa:string;
    experiencia:string;
    altura:string;
}