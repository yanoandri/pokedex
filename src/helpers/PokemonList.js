class PokemonList {

    constructor(pokemon, number) {
        this.pokemon = pokemon
        this.number = number
        this.list = []
    }

    async getManyPokemon() {
        for (let index = 0; index < this.number; index++) {
            const data = await this.pokemon.getPokemon(index + 1)
            this.list.push(data)
        }
        return this.list
    }


}

export default PokemonList