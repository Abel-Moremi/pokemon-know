<template>
    <div class="nav-scroller py-1 mb-2">
        <div class="nav d-flex justify-content-between">
            <input v-model="keyword" class="form-control" type="text" placeholder="Search" aria-label="Search">
            <button  v-on:click="getResults">Search</button>
            <div>
                <p>Results are: {{ results.name }}</p>
                <p v-show="pokemonIsNotFound">Is Not found</p>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    components: {
    },
    data() {
        return {
            keyword: '',
            results: [],
            pokemonIsNotFound: false
        }
    },
    methods: {
        getResults() {
            axios.get("https://pokeapi.co/api/v2/pokemon/"+this.keyword)
            .then(res => 
                    (this.results = res.data,
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