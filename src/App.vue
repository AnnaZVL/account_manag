<script setup>
import HeaderBase from './components/Header/HeaderBase.vue';
import AccountBase from './components/Account/AccountBase.vue';
import { useAccountStore } from './store/accountStore';
import { onMounted } from 'vue';

const accountStore = useAccountStore();
onMounted(() => {
    accountStore.fromLocalStoradge();
    console.log('accountStore', accountStore.accountsStore);
})
</script>

<template>
    <HeaderBase />
    <main>
        <section class="flex flex-col gap-4 overflow-y-auto" >
            <div class="grid grid-cols-5 items-start gap-x-2">
                <span>Метки</span>
                <span>Тип записи</span>
                <span>Логин</span>
                <span>Пароль</span>              
            </div>
            <AccountBase v-for="acc in accountStore.accountsStore" :key="acc.id" :account="acc"/>
        </section>
    </main>
</template>

<style scoped></style>
