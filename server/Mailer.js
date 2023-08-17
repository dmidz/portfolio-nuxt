
const nodemailer = require( 'nodemailer' );

module.exports = Mailer;

//__
function Mailer ( opts = {}, done ){

	const options = {
		fromName: null,
		transport: {
			service: 'gmail',
			auth: {
				user: null,
				pass: null,
			},
		},
		...opts,
	};
	
	// if( !options.transport?.auth?.user?.length ){  throw new Error('options.transport.auth.user must be a non empty string.');}
	// if( !options.transport?.auth?.pass?.length ){  throw new Error('options.transport.auth.pass must be a non empty string.');}

	const transporter = nodemailer.createTransport( options.transport );

	let from = options.transport.auth.user;
	if( options.fromName?.length ){
		from = `"${options.fromName}" ${from}`;
	}

	return {
		send: async ( to, subject, text, _options = {} ) => {
			const mailOptions = {
				from,
				to,
				subject,
				text,
				..._options,
			};

			return transporter.sendMail( mailOptions )
			.catch( err => {
				console.error( err, 'SendMailFailed' );
				throw err;
			});
		},
	};
}

