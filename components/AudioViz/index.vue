
<script setup lang="ts">

import AudioViz from './AudioAnalyser';
import Bars3D from './VizFX/Bars3D.vue';

//__
// const audioSampleSource = ref( '/audio/SoundHelix-Song-7.mp3' );
const audioSampleSource = ref( '/audio/unders - syria_MSTRD 16.- 192mp3.mp3' );
const rootRef = ref();
const vizRef = ref();
const audioOptions = {
	analyser: {
		fftSize: 512,
		maxDecibels: -10,
		minDecibels: -100,
	},
};
const frequencyBinCount = audioOptions.analyser.fftSize/2;
let audioViz;
let stats;
let gui;
let playing = false;
let wasPlaying = false;
let audioElement;
let analyseData: Uint8Array;

watch([() => rootRef.value, () => vizRef.value], async () => {
	// console.log('mounted', this.vizVX );
	if( !rootRef.value || !vizRef.value ){
		return;
	}
	
	window.addEventListener( 'focus', onWindowFocus );
	window.addEventListener( 'blur', onWindowBlur );

});

onBeforeUnmount( () => {
	window.removeEventListener( 'focus', onWindowFocus );
	window.removeEventListener( 'blur', onWindowBlur );
	audioViz?.close();
});

function startAnalyze( event ){
	if( event.target !== audioElement ){
		audioElement = event.target;
		audioViz = AudioViz( audioElement, audioOptions );
		gui?.updateDisplay();
	}
	animate();
}

function animate(){
	if( !playing ){
		return;
	}

	analyseData = audioViz.getAnalyseData();
	// console.log('analyseData', analyseData.length, analyseData[0], analyseData[ analyseData.length/2] );
	vizRef.value?.animate?.( analyseData );

	stats?.update();

	requestAnimationFrame( animate );
}

function onCanPlay( event ){
	event.target.volume = 1;
}

function onCanPlayThrough( event ){
	// this.startAnimate( event );
}

function onPlay( event ){
	// console.log('onPlay');
	playing = true;
	startAnalyze( event );
}

function onPause(){
	// console.log( 'onPause' );
	playing = false;
}

function onWindowFocus(){
	// console.log('onWindowFocus', wasPlaying );
	if( wasPlaying ){
		audioElement.play();
	}
}

function onWindowBlur(){
	wasPlaying = playing;
	// console.log( 'onWindowBlur', wasPlaying );
	if( wasPlaying ){
		audioElement.pause();
	}
}

</script>

<template lang="pug">
.audioviz(ref="rootRef")
	audio(controls :src="audioSampleSource" @playing="onPlay" @pause="onPause" @canplay="onCanPlay"
		@canplaythrough="onCanPlayThrough")
	.vizFX.fullscreen
		Bars3D(ref="vizRef" :frequency-bin-count="frequencyBinCount" )
</template>

<style lang="scss" scoped>

.audioviz {
	display: flex;
	flex-direction:column;
	
	audio {
		//margin-bottom: 10px;/* warn the margin space wont be transparent */
	}
	
	.vizFX {
		z-index: -1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}

</style>
