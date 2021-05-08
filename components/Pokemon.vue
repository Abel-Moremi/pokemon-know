<template>
    <div>{{ results.name }}</div>
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
    mounted() {
        getResults()
    },
    methods: {
        getResults() {
            axios.get("https://pokeapi.co/api/v2/pokemon/")
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