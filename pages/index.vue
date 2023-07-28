<script setup lang="ts">
import Tags from '@/components/_core/Tags.vue';
import Button from 'primevue/button';

</script>

<template lang="pug">
section
	h1 About
	.pres
		.desc
			p Hello !
				br
				| I am David, Senior Fullstack Developer, currently working as freelancer, with 20 years experience.
				br
				| Crafting efficient and reliable web interfaces, easy to use, easy to evolve and easy to maintain.
				| Finding out the right balance between time to market and technical debt.
			p
				| I worked as employee in different teams in various sectors and environments such commerce startups or mature industry,
				| and also as a freelancer creating websites for small & mediumss companies for hotel business or industry.
		img(src="/img/david-martin.jpg" width="150" height="150")
	h2 Pro Level Skills
	h3 Frontend
	Tags(:tags="['Nuxt','Vuejs 3','React','Typescript','Javascript','HTML & (S)CSS','Three.js','D3.js','Jest']")
	h3 Backend
	Tags(:tags="['Node.js','Fastify','Hapi','Sequelize','Tap']")

	.work
		h2 Current Work
		Button Hello :)
		.pics
			NuxtImg(src="/img/trade-orders.png" width="280" )
			NuxtImg(src="/img/trade-orders.png" width="280" )
			NuxtImg(src="/img/trade-orders.png" width="280" )
</template>

<style lang="scss">
main {
	.pres {
		display: flex;
		flex-direction: row;
		margin-bottom: 20px;

		img {
			//width: 150px;
			//height: auto;
			margin-left: 80px;
			border-radius: 2px;
		}
	}

	.pics {
		display: flex;
		flex-direction: row;
		gap: 10px;
		img {
			border: 1px solid #222222;
		}
	}
}
</style>
