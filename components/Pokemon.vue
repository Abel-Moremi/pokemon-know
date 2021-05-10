<template>
    <div>
        <div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
  
            <div class="h-64 bg-cover hover:bg-gray bg-blue-300">
                <img class="object-contain h-48 w-full " :src="pokiPics.front_default">
            </div>
            <div class="mx-6 my-4 border-b border-gray-light">
                <div class="font-extrabold text-2xl text-gray-darker mb-4">{{ pokemon.name }} #{{ pokemon.order }}</div>
                <div class="font-semibold text-gray-dark text-sm mb-2">
                    <ul class="list-inside bg-rose-200">
                        <li><p>Base Experience: </p><p class="text-blue-300 font-black">{{ pokemon.base_experience }}</p></li>
                        <li><p>Height: </p><p class="text-blue-300 font-black">{{ pokemon.height }}</p></li>
                        <li><p>Weight: </p><p class="text-blue-300 font-black">{{ pokemon.weight }}</p></li>
                    </ul>
                </div>
            </div>
            <div class="mx-6 my-4 flex">
                <div class="flex-grow">
                <span class="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
                    <svg fill="white" width="16" height="16" viewBox="0 0 24 24"> 
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                    </svg>
                </span>
                <span class="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
                    <svg fill="white" width="16" height="16" viewBox="0 0 24 24"> 
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                    </svg>
                </span>
                </div>
                <div class="flex-grow text-right">
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
            pokiPics: this.pokemon.sprites
        }
    }
}
</script>