<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Message from 'primevue/message';

import FormInput from '@/components/_core/FormInput.vue';
import Loading from '@/components/_core/Loading.vue';
import PageNav from '@/components/_core/PageNav.vue';

type Status = 'pending' | 'success' | 'error';

//____
const runtimeConfig = useRuntimeConfig();
const title = `Get In Touch | ${ runtimeConfig.public.appName }`;
const description = `Feel free to contact me for more information or work demo.`;

useServerSeoMeta( {
	title,
	ogTitle: title,
	description,
	ogDescription: description,
	// ogImage: 'https://example.com/image.png',
	// twitterCard: 'summary_large_image',
} );

const { errors, handleSubmit } = useForm( {
	validationSchema: yup.object( {
		name: yup.string().required(),
		email: yup.string().email().required(),
		message: yup.string().required(),
	} ),
} );

const req = {
	status: ref<Status>(),
	response: ref<any>(),
	error: ref<any>(),
};

const onSubmit = handleSubmit( async ( values ) => {
	req.status.value = 'pending';
	req.response.value = null;
	req.error.value = null;
	try {
		req.response = await $fetch( '/api/form-contact', {
			method: 'POST',
			body: values,
		} );
		// console.log( 'onSubmit', values, req.response );
		req.status.value = 'success';
	}catch( err ){
		req.error.value = err.statusMessage || 'Mail sending failed';
		req.status.value = 'error';
		// console.log( 'onErrors', { err } );
	}
});

</script>

<template lang="pug">
section.page-contact
	h1 Get in touch
	Loading(:active="req.status.value==='pending'")
		p Feel free to contact me for more info or request work demo.
		Message(v-if="req.status.value==='success'" severity="success" :closable="false") Thank you for your message :)
		form(v-else @submit="onSubmit")
			FormInput(inputKey="name" label="Name" :inputComp="InputText" required)
			FormInput(inputKey="company" label="Company" :inputComp="InputText" class="xz" required)
			FormInput(inputKey="email" label="eMail" :inputComp="InputText" type="email" required)
			FormInput(inputKey="message" label="Message" :inputComp="Textarea" rows="10" required)
			.foot
				Message(v-if="req.error.value" severity="warn" :closable="false") {{ req.error.value }}
				.bts
					Button(type="submit" label="Submit")

PageNav(:prev="{label:'Experiences',link:'/experiences'}")
</template>

<style lang="scss" scoped>
p {
	margin-bottom: 1.5em;
	text-align: center;
}

form {
	.xz {
		display: none;
	}
}

.foot {
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-right:25%;
	.p-message {
		margin: 0 2rem;
	}
	.bts {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		margin: 0 2rem;
	}
	.space {
		flex: 1 1;
	}
}
</style>
