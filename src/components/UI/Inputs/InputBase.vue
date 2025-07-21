<script setup lang="ts">
import IconPasswordHidden from '@/components/UI/Icons/IconPasswordHidden.vue';
import IconPasswordShowed from '@/components/UI/Icons/IconPasswordShowed.vue';

import type { InputProp } from '@/types/inputs';
import { computed, ref } from 'vue';

const props = defineProps<InputProp>();

const isVisible = ref(false);

const toggleVisibility = (): void => {
    isVisible.value = !isVisible.value;
};

const inputType = computed(() => {
    if (props.type === 'text') return 'text';
    return (isVisible.value ? 'text' : 'password')
});

const iconComponent = computed(() => (isVisible.value ? IconPasswordShowed : IconPasswordHidden));
console.log('object', props);
</script>

<template>
<label class="block w-full"  :for="props.name">
    <div class="relative">   
        <input
            class="px-4 py-2 w-full bg-transparent rounded-md border-1 border-indigo-400 hover:bg-indigo-100 transition-colors"
            :class="{ 'border-red-300': !!props.errorMessage  }"
            :name="props.name"
            :type="inputType"
            :maxlength="props.maxLenght"
            autocomplete="off"
            :required="props.required"
        />
        <component
            :is="iconComponent"
            @click="toggleVisibility"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
            v-if="props.type === 'password'"            
        />
    </div>
        <span class="error block mt-1 text-xs text-red-300 min-h-[1.5em]" v-if="props.errorMessage">{{
            props.errorMessage
        }}</span>
    </label>
    
</template>

<style lang="scss" scoped>
input[type='password']::-ms-reveal,
input[type='password']::-ms-clear {
    display: none;
}
</style>
