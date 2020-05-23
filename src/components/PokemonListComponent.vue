<template>
    <div class="container">
        <div class="col-12">
            <h1>Pokedex</h1>
        </div>
        <div class="row justify-content-end">
            <select-search-component />
        </div>
        <div class="row mt-3" v-if="data">
            <pokemon-card-component :data="data" />
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
            data: null
        }
    },
    methods: {
        async getData() {
            const pokemon = new Pokemon()
            return await pokemon.getPokemon(1)
        }
    },
    async created() {
        this.data = await this.getData()
    }
}
</script>