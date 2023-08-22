<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { /*OrbitControls,*/ CameraControls } from '@tresjs/cientos';
// import { Vector3, Float32BufferAttribute } from 'three';

//__
const props = withDefaults( defineProps<{
	barsSize?: [number,number,number],
	barsGap?: number,
	frequencyBinCount?: number,
	// frequenciesData?: Uint8Array,
}>(), {
	barsSize: [.5,512,.1],
	barsGap: 3,
	frequencyBinCount: 64,
	// frequenciesData: [],
});

//__
// const startX = -props.frequencyBinCount*props.barsGap/2;
const mainRef = shallowRef();
const barsRef = shallowRef();
// const cameraRef = shallowRef();

// watch( [ () => props.frequenciesData ], ( freq ) => {
// 	console.log('fres', freq );
// }, { immediate: true } );


// let minValue = 1000;
// let maxValue = 0;
let min = 128;//124;//118;// 110
let max = 256;//174;//
let d = max - min;
let sceneVRot = .0003;

function animate( freqData: Uint8Array ){
	if( !barsRef.value || !mainRef.value ){ return;}
	// console.log( 'animate', freqData );
	let r;
	let c;
	let c2;
	let v;
	for ( let i = 0; i < props.frequencyBinCount; i++ ){
		v = freqData[ i ];
		// v = filterValue( v, i );
		r = Math.max( 0, ( v - min ) ) / d;
		// if( /*i === 0 ||*/ i === barsComposition.children.length/2 ){
		// 	// if( v < minValue ){ 	minValue = v;}
		// 	// if( v > maxValue ){ 	maxValue = v;}
		// 	console.log('v',  v );
		// 	// console.log('v', /*i, *//*Math.round( minValue ), Math.round( maxValue ),*/ v/*, r*/ );
		// }
		c = barsRef.value.children[ i ];
		c.scale.y = props.barsSize[1] * r;
		c2 = barsRef.value.children[ i+ props.frequencyBinCount ];
		c2.scale.y = c.scale.y;
		// if( i === 127 ){
		// 	console.log('r', v, xxx, r, c.scale.y );
		// }
	}

	mainRef.value.rotation.z += sceneVRot;
	mainRef.value.rotation.y -= sceneVRot*.3;
	// mainRef.rotation.x += -sceneVRot/5;
}

defineExpose( { animate } );

/*
//__ KEEP sample: this is the right way to setup a  TresBufferGeometry(:position="linePos")
const linePos = [ new Float32Array( [
	-1000, 0, 0,
	1000, 0, 0,
]), 3 ];

TresLine
	TresBufferGeometry(:position="linePos")
	TresLineBasicMaterial(:args="[{color:0xffffff,linewidth:.1}]")
*/


/*
const cameraRef = shallowRef();
const { onLoop, resume, pause } = useRenderLoop()
pause();

onLoop( ( { delta, elapsed, clock, dt } ) => {
	// console.log('zzz');
} );

watch([() => cameraRef.value], ( cam ) => {
	console.log('Camera', cam);
	if( !cam ){
		return;
	}
	resume();
});
*/

</script>

<template lang="pug">
TresCanvas(:useLegacyLights="false")
	TresPerspectiveCamera( ref="cameraRef" :position="[0, 0, 200]" :look-at="[0, 0, 0]" :fov="75" :near="0.1" :far="10000")
	TresAmbientLight(:intensity="1")
	CameraControls
	//TresGridHelper(:args="[30,10]")
	TresGroup(ref="mainRef")
		//TresMesh(:scale="[10000,.3,.3]")
			TresBoxGeometry(:args="[1,1,1]")
			TresMeshNormalMaterial(:opacity=".5" :transparent="true")
		TresGroup(ref="barsRef")
			TresMesh(v-for="(e , i) in frequencyBinCount" :scale="[barsSize[0],.3,barsSize[2]]"
					:translate-x="i*barsGap")
				TresBoxGeometry(:args="[1,1,1]")
				TresMeshNormalMaterial
			TresMesh(v-for="(e , i) in frequencyBinCount" :scale="[barsSize[0],.3,barsSize[2]]"
					:translate-x="i*-barsGap")
				TresBoxGeometry(:args="[1,1,1]")
				TresMeshNormalMaterial
</template>

<style lang="scss">
.bars3D {
}
</style>
