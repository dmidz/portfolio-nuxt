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

type Status = 'pending' | 'success' | 'error';

//____
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
		console.log( 'onSubmit', values, req.response );
		req.status.value = 'success';
	}catch( err ){
		req.error.value = err.statusMessage || 'Mail sending failed';
		req.status.value = 'error';
		console.log( 'onErrors', { err } );
	}
});

</script>

<template lang="pug">
section.page-contact
	h1 Get in touch
	Loading(:active="req.status.value==='pending'")
		Message(v-if="req.status.value==='success'" severity="success" :closable="false") Thank you for your message :)
		form(v-else @submit="onSubmit")
			FormInput(inputKey="name" label="Name" :inputComp="InputText")
			FormInput(inputKey="company" label="Company" :inputComp="InputText" class="xz")
			FormInput(inputKey="email" label="eMail" :inputComp="InputText" type="email")
			FormInput(inputKey="message" label="Message" :inputComp="Textarea" rows="10")
			.foot
				Message(v-if="req.error.value" severity="warn" :closable="false") {{ req.error.value }}
				.bts
					Button(type="submit") Submit
</template>

<style lang="scss" scoped>
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
