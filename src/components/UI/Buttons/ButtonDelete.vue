<script setup lang="ts">
import type { Account } from '@/types/account';
import IconDelete from '../Icons/IconDelete.vue';

import { useAccountStore } from '@/store/accountStore';

const props = defineProps<{ id: Account['id'] }>();

const accountStore = useAccountStore()

const deleteAccount = () => {
    console.log('DELETE', props.id);
    accountStore.deleteAccount(props.id)
};
</script>

<template>
    <button class="btn-del w-8 h-8 hover:scale-1.2 transition-transform" @click="deleteAccount" aria-label="Удалить аккаунт">
        <IconDelete/>
    </button>
</template>

<style lang="scss" scoped></style>
