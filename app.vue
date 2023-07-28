<script setup lang="ts">
import '~/assets/css/main.scss';

</script>

<template lang="pug">
.layout
	header
		.header-content
			h1 David MARTIN // Frontend Developper
			nav
				RouterLink(to="/") Home
				//RouterLink(to="/about") About
				RouterLink(to="/experiences") Experiences
				//RouterLink(to="/playground") Playground
	main
		NuxtPage
</template>

<style scoped lang="scss">

.layout {
	--header-height: 80px;
	--main-width: 960px;
	--side-padding: 10px;
	flex: 1 1 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: var(--main-width);

	header {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;

		.header-content {
			width: var(--main-width);
			padding: 20px;
			padding-left: 3rem;
			padding-right: 3rem;
			//flex: 1 0 300px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			height: var(--header-height);

		}

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
		}
	}

	main {
		flex: 1 1 100%;
		height: 2000px;
		margin-top: var(--header-height);
		padding-left: var(--side-padding);
		padding-right: var(--side-padding);
		padding-top: 20px;
		padding-bottom: 20px;
	}
}

header {
	line-height: 1.5;
	text-align: center;
	border-bottom: 1px solid var(--color-border);
	backdrop-filter: blur(30px) /* brightness(80%)*/;

	nav {
		//font-size: 12px;
		text-align: center;
		flex: 1;
		border-left: 1px solid var(--color-border);

		a {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 1rem 2rem;
			border-right: 1px solid var(--color-border);

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

@media (max-width: 1024px) {
	//.layout {
	//	header {
	//	}
	//}
}
</style>
