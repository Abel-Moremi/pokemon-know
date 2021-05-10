<template>
    <div>
        <div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-16"> 
            <div class="bg-cover hover:bg-gray">
               <client-only>
                    <apexcharts type="radar" height="350" :options="chartOptions" :series="series"></apexcharts>
                </client-only>
            </div>
            
            <div class="mx-6 my-4 border-b border-gray-light">
                <div class="font-extrabold text-2xl text-gray-darker mb-4"></div>
                <div class="font-semibold text-gray-dark text-sm mb-2">
                   <div class="flex justify-center items-center m-1 px-2 py-1 rounded-full text-base text-white font-medium" :class="pokemonTypeColor[pokemon.types[0].type.name]">
                        <div class="flex-initial max-w-full leading-none text-lg font-semibold">{{ pokemon.types[0].type.name }}</div>
                    </div>
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
            series: [{
                name: 'Series 1',
                data: [
                    this.pokemon.stats[0].base_stat,
                    this.pokemon.stats[1].base_stat,
                    this.pokemon.stats[2].base_stat,
                    this.pokemon.stats[3].base_stat,
                    this.pokemon.stats[4].base_stat,
                    this.pokemon.stats[5].base_stat
                ],
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                dataLabels: {
                    enabled: true
                },
                plotOptions: {
                    radar: {
                        size: 140,
                        polygons: {
                            strokeColors: '#e9e9e9',
                            fill: {
                                colors: ['#f8f8f8', '#fff']
                            }
                        }
                    }
                },
                colors: ['#FF4560'],
                markers: {
                    size: 4,
                    colors: ['#fff'],
                    strokeColor: '#FF4560',
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val
                        }
                    }
                },
                xaxis: {
                    categories: ['Speed', 'SpDef', 'SpAtck', 'Defence', 'Attack', 'Hp']
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function(val, i) {
                            if (i % 2 === 0) {
                                return val
                            } else {
                                return ''
                            }
                        }
                    }
                }
            },
            pokemonTypeColor: {
                "normal":"bg-blue-500",
                "grass":"bg-green-500",
                "ground":"bg-orange-900",
                "fighting":"bg-gray-500",
                "rock":"bg-orange-900",
                "steel":"bg-indigo-800",
                "fire":"bg-red-600",
                "electric":"bg-yellow-500",
                "flying":"bg-purple-900",
                "psychic":"bg-purple-700",
                "bug":"bg-indigo-900",
                "dragon":"bg-teal-900",
                "water":"bg-blue-800",
                "ice":"bg-blue-900",
                "poison":"",
                "dark":"bg-gray-900",
                "ghost":"",
                "fairy":"bg-pink-300",
            }
        }
    }
}
</script>