<script setup lang="ts">
import Tags from '@/components/_core/Tags.vue';
import PicDisplayer from '@/components/_core/PicDisplayer.vue';
import PageNav from '@/components/_core/PageNav.vue';

//__
const runtimeConfig = useRuntimeConfig();
const title = `About | ${ runtimeConfig.public.appName }`;
const description = `Crafting efficient and reliable web interfaces, easy to use, easy to evolve and easy to maintain.`;

useServerSeoMeta( {
	title,
	ogTitle: title,
	description,
	ogDescription: description,
	// ogImage: 'https://example.com/image.png',
	// twitterCard: 'summary_large_image',
} );

</script>

<template lang="pug">
section.page-home
	h1 About
	.pres
		.desc
			p Hello !
				br
				| I am David, Senior Fullstack Developer with 20 years experience, currently working as freelancer.
				br
				| Crafting efficient and reliable web interfaces, easy to use, easy to evolve and easy to maintain.
				| Finding out the right balance between time to market and technical debt.
			p
				| I worked as employee in different teams in various sectors and environments such commerce startups or mature industry,
				| and also as a freelancer building corporate websites & eshops for small companies in hotel business or industry.
		img(src="/img/david-martin.jpg" width="150" height="150")
	h2 Pro Level Skills
	h4 Frontend
	Tags(:tags="['Nuxt','Vue.js 3 ( & 2 )','React','Typescript','Javascript','HTML & (S)CSS','Jest']")
	h4 Backend
	Tags(:tags="['Node.js','Fastify','Hapi','Sequelize','Tap']")

	.work
		h2 Current Work
		h3 Trendastic
		p Web application allowing to manage trading spot orders over multiple exchanges ( Binance, etc. ). 
			| A market tab shows you the most hourly hot symbols, and where you can manage alerts ( price moves, volume, etc. ).
			| There is also a demo mode ( paper trading ) with fake wallet initalized with 1000 USDT so you can try trading
			|  in real market conditions but without real money ( contests soon ).
		PicDisplayer.pics
				.pic.bt
					NuxtImg(src="/img/work/trade-orders.png" preset="workThumb" width="280" height="107" loading="lazy"
						alt="Trade orders & User assets" )
				.pic.bt
					NuxtImg(src="/img/work/market-tab.png" preset="workThumb" width="280" height="107" loading="lazy"
						alt="Market tab")
				.pic.bt
					NuxtImg(src="/img/work/market-alert-edit.png" preset="workThumb" width="280" height="107" loading="lazy"
						alt="Market alert edition" )
		p Feel free to 
			NuxtLink(to="/contact") request a demo 
			| for testing it live or get more infos !
			br
			| Demo mode only requires registration email, but you will able to test all features.
		h4 Frontend
		Tags(:tags="['Vite.js','Vue.js 3','Typescript','Socket.io','HTML & SCSS']")
		h4 Backend
		Tags(:tags="['Node.js','Fastify','Sequelize','Postgresql','Jelastic cloud']")
		br
		h3 Ticks Chart
		p 
			a(href="https://github.com/dmidz/tickschart" target="_blank") Open source modern library 
			| chart for displaying & interaction of intensive data with native HTML Canvas. 
			| Written with Typescript, framework agnostic, can be easily integrated in your favorite tool such Vuejs, React, etc or vanilla JS. 
			| It also includes a (re)player and an extensible indicator system such MAs, volumes, OBV, etc.  
		PicDisplayer.pics
				.pic.bt
					NuxtImg(src="/img/work/tickschart.png" preset="workThumb" width="800" height="430" loading="lazy"
						alt="Interactive ticks chart" )
		Tags(:tags="['Typescript','HTML & CSS','Vite.js']")
PageNav(:next="{label:'Experiences',link:'/experiences'}")
</template>

<style lang="scss" scoped>
.pres {
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;

	img {
		margin-left: 80px;
		border-radius: 2px;
	}
}

.work {
	margin-top: 2rem;
}

.pics {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
	margin-bottom: 10px;
}

</style>
