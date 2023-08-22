
export default function( audioElement, _options ){
	
	const options = {
		analyser: {
			fftSize: 128,
			maxDecibels: -10,
			minDecibels: -100,
			smoothingTimeConstant: 1,

			// channelCountMode: 'explicit',
			// channelCount: 2,

/*
			channelCount: 2,
			channelCountMode: "max",
			channelInterpretation: "speakers",
			fftSize: 512,
			frequencyBinCount: 256,
			maxDecibels: -30,
			minDecibels: -100,
			numberOfInputs: 1,
			numberOfOutputs: 1,
			smoothingTimeConstant: 0.8,
*/
		},
		debug: false,
		..._options
	};
	
	// const log = bypassLog( options.debug );

	let audioContext = new ( window.AudioContext || window.webkitAudioContext )();
	const analyser = audioContext.createAnalyser();
	Object.assign( analyser, options.analyser );
	const bufferLength = analyser.frequencyBinCount;
	const dataArray = new Uint8Array( bufferLength );
	analyser.getByteTimeDomainData( dataArray );

	// close();
	// const audioSourceNode = audioCtx.createMediaStreamSource( stream );
	const audioSourceNode = audioElement.sourceNode || audioContext.createMediaElementSource( audioElement );
	audioElement.sourceNode = audioSourceNode;
	// const audioDestNode = audioCtx.createMediaStreamDestination();
	// audioSourceNode.connect( audioDestNode );
	// audioElement.srcObject = audioDestNode.stream;

	audioSourceNode.connect( analyser );
	analyser.connect( audioContext.destination );


	function getAnalyseData(){
		analyser.getByteTimeDomainData( dataArray );
		return dataArray;
	}
	
	function close(){
		audioContext.close();
		// audioContext = null;
	}
	// console.log('analyser', analyser);
	
  return {
		audioContext,
		analyser,
		getAnalyseData,
		close,
	};
	
	
	/*
	//__ NOTE: getDisplayMedia only work with https ( that's good ! )
		const device = await useAudioOutput();
		if(!device){    return;}
		console.log('devices', device );
		console.log( 'navigator', navigator );
		
		const stream = await (navigator.mediaDevices||navigator).getDisplayMedia( {
			video: false,
			// audio: true
		});
		console.log( 'displayMedia', stream );
	*/
		
	
};

const useAudioOutput = async () => {
	// const list = await navigator.mediaDevices.enumerateDevices();
	const list = await filterDevicesByKind( 'audiooutput' );

	const res = list[ 0 ] || null;
	if( !res ){
		console.error( 'no audiooutput found;' )
	}

	return res;

}

const filterDevicesByKind = async ( kind ) => {
	const devices = await navigator.mediaDevices.enumerateDevices();
	return devices.filter( device => device.kind === kind );
}

