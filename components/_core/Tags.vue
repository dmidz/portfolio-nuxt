<script setup lang="ts">

const props = defineProps<{
	tags: string[];
}>();

</script>

<template lang="pug">
ul.tags
	li.tag(v-for="(tag, index) in props.tags" :key="index") {{ tag }}
</template>

<style lang="scss">
.tags {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.5rem;
	list-style: none;
	padding: 0;
	
	.tag {
		flex: none;
		//color: rgb(112 255 195 / 85%);
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		background-color: rgba(255, 255, 255, 0.05);
		border-left: 1px solid rgba(255, 255, 255, 0.1);
		border-right: 1px solid rgba(255, 255, 255, 0.1);
		//background-image: linear-gradient(0deg, #00000000, #ffffff0a);
		//border: 1px solid #000000;
	}
}
</style>
