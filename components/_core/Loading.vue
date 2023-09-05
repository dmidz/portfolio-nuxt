<script setup lang="ts">

import ProgressSpinner from 'primevue/progressspinner';

const props = defineProps<{
	active?: boolean,
}>();

</script>

<template lang="pug">
.ctn-loading(:class="{ active }")
	.overlay
		ProgressSpinner(animationDuration=".5s")
	.loading-content
		slot
</template>

<style lang="scss" scoped>
.ctn-loading {
	.overlay {
		opacity: 0;
		z-index: 99;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		display: flex;
	}

	.pi {
		animation-duration: .5s;
		font-size: 3rem;
		color: var(--primary-color);
	}
	
	&.active {
		.loading-content {
			opacity: 0.3;
			transition: opacity 0.5s;
		}

		.overlay {
			pointer-events: auto;
			opacity: 1;
			transition: opacity 0.5s;
			//display: flex;
		}
	}

}
</style>
