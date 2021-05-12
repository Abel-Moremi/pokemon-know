<template>
    <div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-4 bg-white">
        <div lass="mx-6 my-4 border-b border-gray-light content-center">
            <div class="font-extrabold text-2xl text-gray-darker mb-4 text-center text-yellow-600">Abilities</div>
        </div>
        <div v-for="(value, index) in pokiAbilities" :key="index">
            <div class="w-full md:full mx-auto p-4">
                <div class="shadow-md">
                    <p class="text-center font-bold uppercase">{{ index }}</p>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" :id="index" type="checkbox" name="tabs2">
                        <label class="block p-4 leading-normal cursor-pointer font-semibold" :for="index">effect</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-blue-300 leading-normal">
                            <p class="p-5">{{ value.effect }}</p>
                        </div>
                    </div>
                    <div class="tab w-full overflow-hidden border-t">
                        <input class="absolute opacity-0" :id="value.short_effect" type="checkbox" name="tabs2">
                        <label class="block p-4 leading-normal cursor-pointer font-semibold" :for="value.short_effect">short-effect</label>
                        <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-blue-300 leading-normal">
                            <p class="p-5">{{ value.short_effect }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        pokemon: Object
    },
    data() {
        return {
            pokiAbilities: null
        }
    },
    async created() {
        this.pokiAbilities = await this.getPokemonAbilities()
    },
    methods: {
        async getPokemonAbilities(){
            let abilitiesList = this.getPokemonAbilitiesNames()
            let abilities = {}
            for (let i = 0; i < abilitiesList.length; i++) {
                const abi = await this.$axios.get('https://pokeapi.co/api/v2/ability/'+abilitiesList[i])
                abilities[abilitiesList[i]] = this.getAbilityEn(abi.data)
            }
            console.log(abilities)
            return abilities
        },
        getPokemonAbilitiesNames(){
            let abilities = []
            for (let i = 0; i < this.pokemon.abilities.length; i++) {
                abilities[i] = this.pokemon.abilities[i].ability.name
            }
            return abilities
        },
        getAbilityEn(abi){
            let enAbi = {}
            abi.effect_entries.forEach(langAbi => {
                if(langAbi.language.name === 'en'){
                    enAbi = langAbi
                }
            });
            return enAbi
        }
    },
}
</script>
<style scoped>
 /* Tab content - closed */
.tab-content {
    max-height: 0;
    -webkit-transition: max-height .35s;
    -o-transition: max-height .35s;
    transition: max-height .35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
    max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label{
    /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
    font-size: 1.25rem; /*.text-xl*/
    padding: 1.25rem; /*.p-5*/
    border-left-width: 2px; /*.border-l-2*/
    border-color: #90cdf4; /*.border-indigo*/
    background-color: #f8fafc; /*.bg-gray-100 */
    color: #90cdf4; /*.text-indigo*/
}
/* Icon */
.tab label::after {
    float:right;
    right: 0;
    top: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5;
    font-size: 1.25rem;
    text-align: center;
    -webkit-transition: all .35s;
    -o-transition: all .35s;
    transition: all .35s;
}
/* Icon formatting - closed */
.tab input[type=checkbox] + label::after {
    content: "+";
    font-weight:bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
    border-color: #b8c2cc; /*.border-grey*/
}
.tab input[type=radio] + label::after {
    content: "\25BE";
    font-weight:bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
    border-color: #b8c2cc; /*.border-grey*/
}
/* Icon formatting - open */
.tab input[type=checkbox]:checked + label::after {
    transform: rotate(315deg);
    background-color: #90cdf4; /*.bg-indigo*/
    color: #f8fafc; /*.text-grey-lightest*/
}
.tab input[type=radio]:checked + label::after {
    transform: rotateX(180deg);
    background-color: #90cdf4; /*.bg-indigo*/
    color: #f8fafc; /*.text-grey-lightest*/
}
</style>