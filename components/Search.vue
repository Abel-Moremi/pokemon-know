<template>
    <div class="nav-scroller py-1 mb-2">
        <div class="nav d-flex justify-content-between">
            <div class="p-8">
                <div class="bg-white flex items-center rounded-full shadow-xl">
                    <input v-model="keyword" class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" aria-label="Search">
                    
                    <div class="p-4">
                    <button v-on:click="getResults" class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                        <IconifyIcon :icon="icons.bxSearchAlt" />
                    </button>
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <div v-if="results === null">
                    <p>Look up pokemon</p>
                </div>
                <div v-else >
                    <div v-if="pokemonIsNotFound">
                        <div>Is Not found</div>
                    </div>
                    <div v-else>
                        <img :src="results.sprites.front_default" :alt="results.name">
                        <p>{{ results.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import IconifyIcon from '@iconify/vue';
import bxSearchAlt from '@iconify/icons-bx/bx-search-alt';

export default {
    components: {
        IconifyIcon
    },
    data() {
        return {
            keyword: '',
            results: null,
            pokemonIsNotFound: true,
            icons: {
				bxSearchAlt,
			}
        }
    },
    methods: {
        getResults() {
            axios.get("https://pokeapi.co/api/v2/pokemon/"+this.keyword)
            .then(res => 
                    (this.results = res.data,
                    console.log(this.results.sprites.front_default),
                     this.pokemonIsNotFound = false)
                )
            .catch(
                err => {
                    if (err.response.status === 404) {
                        this.pokemonIsNotFound = true
                    }
                }
            );
        }
    },
    created() {
        this.getResults()
    }
}
</script>