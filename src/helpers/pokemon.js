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

    // setData(res) {
    //     this.order = res.order
    //     this.name = res.name
    //     this.image = res.sprites.front_default
    //     this.type = res.types.map((v) => {
    //         return v.type.name
    //     }).join(", ")
    // }
}

export default Pokemon