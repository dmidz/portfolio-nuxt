// import {
// 	eventHandler,
// } from 'h3';

export default defineNitroPlugin( ( nitroApp ) => {
	// console.log( '[logPlugin] init', nitroApp.h3App.stack );
	//__ uncomment request hook below to log all requests
	// nitroApp.hooks.hook( 'request', ( event ) => {
	// 	console.log( '[logPlugin] request', event.path );
	// } );

	// nitroApp.hooks.hook( 'beforeResponse', ( event ) => {
	// 	console.log( '[logPlugin] beforeResponse', event.path );
	// } );
	// nitroApp.hooks.hook( 'afterResponse', ( event ) => {
	// 	console.log( '[logPlugin] afterResponse', event.path );
	// } );

	/*__ old way to handle request BEFORE public nitro handler*/
	// const publicIndex = 2;
	// nitroApp.h3App.stack.splice( publicIndex, 0,
	// 	{
	// 		route: '/',
	// 		match: undefined,
	// 		handler: eventHandler(( event ) => {
	// 			console.log( '[logPlugin][handler] request: ' + getRequestURL( event ) );
	// 		}),
	// 	},
	// )

	// console.log( '[logPlugin]', nitroApp.h3App.stack );
} );