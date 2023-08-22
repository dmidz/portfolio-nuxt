<script setup lang="ts">

onErrorCaptured( () => {
	console.log( 'errorCaptured' );
	// failed = true;
} );


</script>

<template lang="pug">
.page-playground
	nav
		ul
			li
				NuxtLink(to="/playground/audioviz") AudioViz
	ClientOnly
		//Suspense
		NuxtPage

</template>

<style lang="scss">
.page-playground {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: #0d3c61;
	padding-top: var(--header-height);
	overflow: hidden;
	
	nav {
		ul {
			
		}
	}
}
</style>
