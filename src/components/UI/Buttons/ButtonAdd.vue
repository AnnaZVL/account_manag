<script setup lang="ts">
import { useAccountStore } from '@/store/accountStore';

const accountsStore = useAccountStore();

const addAccount = () => {
    console.log('Add');
    accountsStore.addAccount()
};
</script>

<template>
    <button
        class="inline-flex justify-center items-baselin size-12 text-4xl bg-transparent rounded-md border-2 border-indigo-400 hover:bg-indigo-100 transition-colors cursor-pointer"
        @click="addAccount"
    >
        +
    </button>
</template>

<style lang="scss" scoped></style>
