(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{244:function(t,e,o){"use strict";o.r(e);var r={props:{pokemon:Object},data:function(){return{series:[{name:"Series 1",data:[this.pokemon.stats[0].base_stat,this.pokemon.stats[1].base_stat,this.pokemon.stats[2].base_stat,this.pokemon.stats[3].base_stat,this.pokemon.stats[4].base_stat,this.pokemon.stats[5].base_stat]}],chartOptions:{chart:{height:350,type:"radar"},dataLabels:{enabled:!0},plotOptions:{radar:{size:140,polygons:{strokeColors:"#e9e9e9",fill:{colors:["#f8f8f8","#fff"]}}}},colors:["#FF4560"],markers:{size:4,colors:["#fff"],strokeColor:"#FF4560",strokeWidth:2},tooltip:{y:{formatter:function(t){return t}}},xaxis:{categories:["Speed","SpDef","SpAtck","Defence","Attack","Hp"]},yaxis:{tickAmount:7,labels:{formatter:function(t,i){return i%2==0?t:""}}}},pokemonTypeColor:{normal:"bg-blue-500",grass:"bg-green-500",ground:"bg-orange-900",fighting:"bg-gray-500",rock:"bg-orange-900",steel:"bg-indigo-800",fire:"bg-red-600",electric:"bg-yellow-500",flying:"bg-purple-900",psychic:"bg-purple-700",bug:"bg-indigo-900",dragon:"bg-teal-900",water:"bg-blue-800",ice:"bg-blue-900",poison:"",dark:"bg-gray-900",ghost:"",fairy:"bg-pink-300"}}}},n=o(37),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"max-w-sm rounded-sm overflow-hidden shadow-lg m-4 bg-white"},[o("div",{staticClass:"bg-cover hover:bg-gray"},[o("client-only",[o("apexcharts",{attrs:{type:"radar",height:"350",options:t.chartOptions,series:t.series}})],1)],1),t._v(" "),o("div",{staticClass:"mx-6 my-4 border-b border-gray-light"},[o("div",{staticClass:"font-normal text-2xl text-gray-darker mb-4"}),t._v(" "),o("div",{staticClass:"font-normal text-gray-dark text-sm mb-2"},[o("div",{staticClass:"flex justify-center items-center m-1 px-2 py-2 rounded-full text-base text-white font-normal",class:t.pokemonTypeColor[t.pokemon.types[0].type.name]},[o("div",{staticClass:"flex-initial max-w-full leading-none text-lg font-normal"},[t._v(t._s(t.pokemon.types[0].type.name))])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);