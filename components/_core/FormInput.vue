<script setup lang="ts">
import { type Component, useAttrs } from 'vue';
import { useField } from 'vee-validate';

//__
const props = defineProps<{
	inputKey: string,
	inputComp: Component,
	label?: string,
	required?: boolean,
}>();

const attrs = useAttrs();

const { value, errorMessage } = useField( () => props.inputKey );
</script>

<template lang="pug">
.form-input(:class="{required}")
	label {{ label }}
	component(:is="inputComp" v-model="value" v-bind="attrs" :class="{ 'p-invalid': !!errorMessage }")
	small(class="p-error") {{ errorMessage }}
</template>

<style lang="scss" scoped>
.form-input {
	display: flex;
	flex-direction: row;
	margin-bottom: 1rem;
	align-items: flex-start;
	
	label, small {
		line-height: 2.4rem;
	}
	
	label {
		flex: 1 1;
		text-align: right;
		margin-right: 1rem;
	}

	small {
		margin-left: 1rem;
		flex: 1 1;
	}
	
	:deep(input), :deep(textarea) {
		flex: 2 1;
	}

	:deep(textarea) {
		padding-top: 11px;
	}
	
	&.required {
		label:after {
			content: " *";
			color:var(--primary-color);
		}
	}
}
</style>
