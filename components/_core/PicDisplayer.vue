<script setup lang="ts">
import { ref, onMounted, withDefaults, inject, computed, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
// import type { DialogPassThroughOptions } from 'primevue/dialog';
import { useEventListener } from '@vueuse/core';

//__
const props = withDefaults( defineProps<{
	triggerSelector?: string,
	replOriginSrc?: string,
}>(), {
	triggerSelector: 'img',
	replOriginSrc: '_ipx/s_280x112/'
} );

// const globalDialogsProps: DialogPassThroughOptions = inject( 'dialogsProps' );

const elRoot = ref<Element>();
const elImg = ref<Element>();
const visible = ref( false );
const src = ref<string>();
const els = ref<Element[]>;
const imgIndex = ref( 0 );

watch( [ () => elRoot.value ], () => {
	if ( !elRoot.value ){	return;}
	
	els.value = elRoot.value.querySelectorAll( props.triggerSelector );
}, { immediate: false } );

onMounted( () => {
	useEventListener( elRoot, 'click', ( ev ) => {
		if( ev.target === elImg.value || !ev.target.matches( props.triggerSelector ) ){
			return;
		}
		
		elImg.value = ev.target;
		visible.value = true;
		imgIndex.value = Array.prototype.indexOf.call( els.value, ev.target );
		
		// console.log( 'click', [ev.target], ev.target.matches( props.triggerSelector ) );
	} );
} );

function setCurrent( index ){
	imgIndex.value = Math.max( 0, Math.min( els.value.length, index ));
	elImg.value = els.value.item( index );
}

function handleHide(){
	elImg.value = undefined;
}

function handlePrev(){
	setCurrent( imgIndex.value-1 );
}

function handleNext(){
	setCurrent( imgIndex.value+1 );
}

</script>

<template lang="pug">
.pic-displayer(ref="elRoot")
	slot
	Dialog.pic-diplayer-dialog(v-model:visible="visible" :draggable="false" modal dismissableMask @hide="handleHide")
		template(#header)
			.legend {{elImg.alt}}
			nav(v-if="!!els.value.length")
				Button(@click="handlePrev" :disabled="!imgIndex" aria-label="Previous" icon="pi pi-angle-left" text rounded)
				.pager {{ imgIndex+1 }} / {{ els.value.length }}
				Button(@click="handleNext" :disabled="imgIndex>=els.value.length-1" aria-label="Next" icon="pi pi-angle-right" text rounded)
		NuxtImg(v-if="elImg" :src="elImg.src.replace(`${elImg.baseURI}${props.replOriginSrc}`,'')" width="1280" height="509" )
</template>

<style lang="scss">
:root {
	.pic-diplayer-dialog {
		flex-direction: column-reverse!important;
		margin: 10px;
		max-height: 100% !important;

		.p-dialog-header {
			border-top: 1px solid var(--surface-border);
			padding: 0.5rem 0.5rem 0.5rem 1.5rem;
			.legend {
				flex: 1 1;
			}
			nav {
				flex: 1 1;
				width: 150px;
				display: flex;
				flex-direction: row;
				align-items: center;
				.pager {
					width: 50px;
					text-align: center;
					//margin: 0 12px;
				}
			}
		}
		.p-dialog-content {
			padding: 0;
			display: flex;
		}
	}
}
</style>
