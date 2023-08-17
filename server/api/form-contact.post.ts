
import Mailer from '../Mailer';

const nl = "\n";

const { appName, mailerAuthUser, mailerAuthPass, mailerTo } = useRuntimeConfig();
if( !appName?.length){ 					throw new Error('config.appName is required.')}
if( !mailerAuthUser?.length){ 	throw new Error('config.mailerAuthUser is required.')}
if( !mailerAuthPass?.length){ 	throw new Error('config.mailerAuthPass is required.')}
if( !mailerTo?.length){ 				throw new Error('config.mailerTo is required.')}
// console.log('config', mailerAuthUser );

const mailer = Mailer( {
	fromName: `${ appName }`,
	transport: {
		service: 'gmail',
		auth: {
			user: `${mailerAuthUser}`,
			pass: `${mailerAuthPass}`,
		},
	},
});

export default defineEventHandler( async ( event ) => {
	const okResult = { ok: true };
	
	const body = await readBody( event );
	
	if( body.company?.length ){//__ honeypot
		return okResult;
	}
	
	const { name = '', email = '', message = '' } = body;

	if(!name){ throw createError( { statusCode: 400, statusMessage: 'name is required.' } );}
	if(!email){ throw createError( { statusCode: 400, statusMessage: 'email is required.' } );}
	if(!message){ throw createError( { statusCode: 400, statusMessage: 'message is required.' } );}

	try {
		await mailer.send( mailerTo, 'Contact Form',
			`Name: ${name}` + nl +
			`eMail: ${email}` + nl +
			`Message:` + nl +
			`${message}`,
			{
				replyTo: `${email}`,
				// bcc: options.mailAdmin ? [ options.mailAdmin ] : null,
			}
		);
		return okResult;
	}catch( err ){
		throw createError( {
			// statusCode: 400,
			statusMessage: 'Mail sending failed',
		} );
	}
} );
