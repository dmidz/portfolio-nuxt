<script setup lang="ts">
import Tags from '@/components/_core/Tags.vue';
import PicDisplayer from '@/components/_core/PicDisplayer.vue';
import PageNav from '@/components/_core/PageNav.vue';

//__
const runtimeConfig = useRuntimeConfig();
const title = `About | ${ runtimeConfig.appName }`;
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
	h3 Frontend
	Tags(:tags="['Nuxt','Vue.js','React','Typescript','Javascript','HTML & (S)CSS','Jest']")
	h3 Backend
	Tags(:tags="['Node.js','Fastify','Hapi','Sequelize','Tap']")

	.work
		h2 Current Work
		PicDisplayer
			.pics
				.pic.bt
					NuxtImg(src="/img/work/trade-orders.png" preset="workThumb" width="280" height="112" loading="lazy"
						alt="Trade orders & User assets" )
				.pic.bt
					NuxtImg(src="/img/work/market-tab.png" preset="workThumb" width="280" height="112" loading="lazy"
						alt="Market tab")
				.pic.bt
					NuxtImg(src="/img/work/market-alert-edit.png" preset="workThumb" width="280" height="112" loading="lazy"
						alt="Market alert edition" )
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
}

</style>
