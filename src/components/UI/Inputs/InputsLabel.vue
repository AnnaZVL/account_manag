<script setup lang="ts">
import type { Label, LabelProp } from '@/types/inputs';
import { ref } from 'vue';

const props = defineProps<LabelProp>();

const emit = defineEmits<{
    (event: 'update:modelValue', value: {text: string}[]): void;
}>();


const isValid = ref<boolean>(false);
const errorMessage = ref<string>('');

const labelString = ref(
  Array.isArray(props.modelValue)
    ? props.modelValue.map(obj => obj.text).join('; ')
    : ''
);

const updateLabels = (): Label[] => {
  return labelString.value
    .split(';')
    .map(str => str.trim())
    .filter(Boolean)
    .map(text => ({ text }));
};

const handelValue = (e: Event): void => {
   
    isValid.value = false;

    const target = e.target as HTMLInputElement;
    labelString.value = target.value;

    const currentValue = updateLabels();

    if (target.value.length >= props.maxLength) {        
        isValid.value = false;          
        errorMessage.value = `Максимальное количество символов: ${props.maxLength}`;
    } else {
        isValid.value = true;
        emit('update:modelValue', currentValue);
    }  
};
</script>

<template>
    <label class="block w-full relative" :for="props.name">     
        <div class="relative">            
            <input
                class="px-4 py-2 w-full bg-transparent rounded-md hover:bg-indigo-100 transition-colors"
                :class="{ 'border-1 border-indigo-400': !isValid, 'border-2 border-green-400': isValid }"
                :value="labelString"
                :name="props.name"
                type="text"
                :maxlength="props.maxLength"
                autocomplete="off"                
                @blur="handelValue"
            />            
            <transition name="fade">
                <span
                    class="error absolute left-2 top-full mt-1 text-xs text-red-400"
                    v-if="errorMessage"
                    >{{ errorMessage }}</span
                >
            </transition> 
        </div> 
    </label>
</template>

<style lang="scss" scoped>
.fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
