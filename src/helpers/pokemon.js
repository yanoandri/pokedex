import axios from "axios"

class Pokemon {
    constructor() {
        this.url = 'https://pokeapi.co'
        this.path = '/api/v2/pokemon/'
    }

    async getPokemon(params) {
        const url = `${this.url}${this.path}`
        const res = await axios.get(`${url}${params}`)
        return res.data
    }
}

export default Pokemon