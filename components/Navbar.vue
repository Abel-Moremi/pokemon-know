<template>
  <nav class="bg-blue-300"> 
    <div class="container mx-auto">
      <nuxt-link to="/" class="block  text-yellow-600 hover:text-white px-3 py-3">
        <IconifyIcon :icon="icons.arrowBackThick" :style="{fontSize: '32px'}"/>
      </nuxt-link>
    </div>       
  </nav>
</template>

<script>
import IconifyIcon from '@iconify/vue';
import arrowBackThick from '@iconify/icons-akar-icons/arrow-back-thick-fill';

export default {
  components: {
		IconifyIcon,
	},
	data() {
		return {
			icons: {
				arrowBackThick,
			},
		};
	}
}
</script>