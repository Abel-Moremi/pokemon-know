<template>
    <p>{{ poki.name }}</p>
</template>


<script>

export default {
    async asyncData({params, $axios}) {
	    const slug = params.slug
        const poki = await $axios.$get('https://pokeapi.co/api/v2/pokemon/'+slug)
        console.log(poki)
        return { poki }
	},
}
</script>