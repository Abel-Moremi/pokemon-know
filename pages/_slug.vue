<template>
    <div class="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <pokemon :pokemon="pokemon"/>
        <pokemon-stats :pokemon="pokemon" />
        <pokemon-abilities :pokemon="pokemon" />
    </div>
</template>


<script>
import Pokemon from '~/components/Pokemon.vue'
import PokemonAbilities from '~/components/PokemonAbilities.vue'
import PokemonStats from '~/components/PokemonStats.vue'

export default {
  components: { 
    Pokemon, 
    PokemonStats, 
    PokemonAbilities 
  },
  async asyncData({params, $axios}) {
    const slug = params.slug
    const poki = await $axios.get('https://pokeapi.co/api/v2/pokemon/'+slug)
    return { pokemon:poki.data }
	}
}
</script>