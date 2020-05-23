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
            v-if="!loading && data && data.length > 0">
             <pokemon-card-component 
                v-for="(val, key) in data"
                :key="key"
                :data="val" />
        </div>
        <div v-else-if="!loading && data.length === 0">
            Ga ada pokemon nya....
        </div>
        <div v-if="loading">
            <p>Loading pokemon nya....</p> 
        </div>
    </div>
</template>

<script>
import PokemonCardComponent from './PokemonCardComponent.vue'
import SelectSearchComponent from './SelectSearchComponent.vue'
import Pokemon from '../helpers/Pokemon.js'
import PokemonList from '../helpers/PokemonList.js'

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
            keyword: '',
            loading: false
        }
    },
    methods: {
        async getData() {
            this.loading = true
            this.data = []

            if (this.keyword) {
                const pokemon = new Pokemon()
                const data = await pokemon.getPokemon(this.keyword)
                this.data.push(data)
            } 
            else {
                const pokemon = new Pokemon()
                this.data = await new PokemonList(pokemon, this.limit).getManyPokemon()    
            }
            this.loading = false
        },
        setLimitData(e) {
            this.limit = e
            this.getData()
        },
        setKeywordData(e) {
            this.keyword = e
            this.getData()
        },
        sesuatu() {
            this.loading = !this.loading
        }
    },
    async created() {
        await this.getData()
    }
}
</script>

<style scoped>
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: 1 0.5s ease-in;
}
</style>