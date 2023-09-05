<script setup lang="ts">

const props = defineProps<{
	prev?: {
		label: string,
		link: string,
	},
	next?: {
		label: string,
		link: string,
	},
}>();

</script>

<template lang="pug">
.page-nav
	NuxtLink.page-link(v-if="prev" :to="prev.link")
		i(class="pi pi-angle-left")
		| {{ prev.label }}
	div
	NuxtLink.page-link(v-if="next" :to="next.link")
		| {{ next.label }}
		i(class="pi pi-angle-right")
</template>

<style lang="scss" scoped>
.page-nav {
	margin: 8px 0 36px 0;
	//border-top: 1px solid #222222;
	//padding-top: 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.page-link {
		padding: 0 4px;
		font-size: 1.2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 4px;

		i {
			color: #ffffff;
		}
	}
}
</style>
