<template>
    <div class="flex items-center justify-center h-screen">
        <div class="nav d-flex justify-content-between w-3/6">
            <div class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
                <img class="object-contain md:object-scale-down " src="~/assets/images/pokemon-know.png" />
            </div>
            <div class="p-8">
                <div class="bg-white flex items-center rounded-full shadow-xl">
                    <input v-model="keyword" class="rounded-l-full w-full py-4 px-8 h-8 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" aria-label="Search">
                    <div class="p-4">
                        <button v-on:click="getResult" class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                            <IconifyIcon :icon="icons.bxSearchAlt" />
                        </button>
                    </div>
                </div>
            </div>
             <div v-if="pokemonIsNotFound" class="justify-center" >
                <div>Not found, Try again</div>
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
        IconifyIcon,
    },
    data() {
        return {
            keyword: '',
            result: null,
            pokemonIsNotFound: false,
            icons: {
				bxSearchAlt,
			}
        }
    },
    methods: {
        getResult() {
            if(this.result === null){
                this.result = {}
            }else{
                axios.get("https://pokeapi.co/api/v2/pokemon/"+this.keyword.toLowerCase())
                .then(res => 
                        (this.result = res.data,
                        this.pokemonIsNotFound = false,
                        this.redirectToPokemon(this.result.name))
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
        redirectToPokemon(pokiname){
           this.$router.push('/'+pokiname); 
        }
    },
    created() {
        this.getResult()
    }
}
</script>