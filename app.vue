<script setup lang="ts">
import '~/assets/css/main.scss';
import 'primeicons/primeicons.css';

import { ref, provide } from 'vue';
import type { DialogPassThroughOptions } from 'primevue/dialog';

//__
const headHeight = ref( 80 );

const dialogsProps = ref<DialogPassThroughOptions>( {
	root: {
		style: {
			// 'margin': `10px`,
			// 'max-height': '100%',
			// 'margin-top': `${ headHeight.value }px`,
		}
	},
	// root: ( options ) => ({
	// 	style: `margin-top:${headHeight.value}px`,
	// })
} );
provide( 'dialogsProps', dialogsProps );

</script>

<template lang="pug">
.layout
	header
		//.header-content
		h1 David MARTIN // Frontend Developper
		nav
			RouterLink(to="/") Home
			RouterLink(to="/experiences") Experiences
			//RouterLink(to="/playground") Playground
			RouterLink(to="/contact") Contact
	main
		NuxtPage
</template>

<style lang="scss">

.layout {
	--header-height: 70px;
	--main-width: 960px;
	--side-padding: 10px;
	flex: 1 1 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	//max-width: var(--main-width);

	header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		line-height: 1.5;
		text-align: center;
		border-bottom: 1px solid var(--color-border);
		backdrop-filter: blur(30px) /* brightness(80%)*/;
		
		h1 {
			font-size: 1.1rem;
			font-weight: 100;
			white-space: nowrap;
			margin-right: 2rem;
		}

		h2 {
			font-size: 1.25rem;
			font-weight: 100;
			white-space: nowrap;
		}

		nav {
			display: flex;
			flex-direction: row;
			text-align: center;
			border-left: 1px solid var(--color-border);

			a {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				padding: 1rem 2rem;
				border-right: 1px solid var(--color-border);
				text-transform: uppercase;

				&:first-of-type {
					//border: 0;
				}

				&.router-link-exact-active {
					color: var(--color-text);

					&:hover {
						background-color: transparent;
					}
				}

				svg {
					margin-right: 10px;
					fill: rgba(255, 255, 255, 0.1);
				}
			}

		}
	}

	main {
		flex: 1 1 100%;
		margin-top: var(--header-height);
		width: var(--main-width);
		max-width: 100%;
		display: flex;
		flex-direction: column;
	}
}

@media (max-width: 1024px) {
	//.layout {
	//	header {
	//	}
	//}
}
</style>
