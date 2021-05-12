<template>
  <div>
    <navbar />
    <div class=" container mx-auto grid items-center justify-center h-screen">
      <div class="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <pokemon :pokemon="pokemon"/>
        <pokemon-stats :pokemon="pokemon" />
        <pokemon-abilities :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from '~/components/Navbar.vue'
import Pokemon from '~/components/Pokemon.vue'
import PokemonAbilities from '~/components/PokemonAbilities.vue'
import PokemonStats from '~/components/PokemonStats.vue'

export default {
  components: { 
    Pokemon, 
    PokemonStats, 
    PokemonAbilities,
    Navbar
  },
  async asyncData({params, $axios}) {
    const slug = params.slug
    const poki = await $axios.get('https://pokeapi.co/api/v2/pokemon/'+slug)
    return { pokemon:poki.data }
	}
}
</script>