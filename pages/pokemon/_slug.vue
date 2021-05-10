<template>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <pokemon :pokemon="poki"/>
        <pokemon-stats :pokemon="poki" />
    </div>
</template>


<script>
import Pokemon from '~/components/Pokemon.vue'
import PokemonStats from '~/components/PokemonStats.vue'

export default {
  components: { Pokemon, PokemonStats },
    async asyncData({params, $axios}) {
	    const slug = params.slug
        const poki = await $axios.$get('https://pokeapi.co/api/v2/pokemon/'+slug)
        console.log(poki)
        return { poki }
	},
}
</script>