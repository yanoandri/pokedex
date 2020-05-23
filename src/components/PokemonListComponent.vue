<template>
    <div class="container">
        <div class="col-12">
            <h1>Pokedex</h1>
        </div>
        <div class="row justify-content-end">
            <select-search-component 
            @set-limit="setLimitData"
            @set-keyword="setKeywordData"/>
        </div>
        <div class="row mt-3" 
            v-if="data && data.length > 0">
            <pokemon-card-component 
                v-for="(val, key) in data"
                :key="key"
                :data="val" />
        </div>
        <div v-else>
            Ga ada pokemon nya....
        </div>
    </div>
</template>

<script>
import PokemonCardComponent from './PokemonCardComponent.vue'
import SelectSearchComponent from './SelectSearchComponent.vue'
import Pokemon from '../helpers/pokemon.js'

export default {
    name: 'pokemon-list-component',
    components: {
        PokemonCardComponent,
        SelectSearchComponent
    },
    data() {
        return {
            data: [],
            limit: 50,
            keyword: ''
        }
    },
    methods: {
        async getData() {
            this.data = []

            if (this.keyword) {
                const pokemon = new Pokemon()
                const data = await pokemon.getPokemon(this.keyword)
                this.data.push(data)
            } 
            else {
                for (let index = 0; index < this.limit; index++) {
                    const pokemon = new Pokemon()
                    const data = await pokemon.getPokemon(index + 1)
                    this.data.push(data)
                }    
            }
        },
        setLimitData(e) {
            this.limit = e
            this.getData()
        },
        setKeywordData(e) {
            console.log(e)
            this.keyword = e
            this.getData()
        }
    },
    async created() {
        await this.getData()
    }
}
</script>