<script setup lang="ts">
import ButtonDelete from '../UI/Buttons/ButtonDelete.vue';
import InputBase from '../UI/Inputs/InputBase.vue';

import { ref } from 'vue';

import type { Account } from '@/types/account';
import { AccountType } from '@/types/account';

const { account } = defineProps<{ account: Account }>();
//console.log('ACC', account);
</script>

<template>
    <div class="account grid grid-cols-5 items-center gap-x-2 gap-y-4 w-full">
        <InputBase
            :id="`${account.id}-label`"
            :name="account.label"
            type="text"
            v-model="account.label"
            :maxLenght="50"
            
        />
        <InputBase
            :id="`${account.id}-login`"
            :name="account.label"
            type="text"
            v-model="account.label"
            :maxLenght="50"
            required
        />
        <InputBase
            :class="{'big': account.type === AccountType.LDAP}"
            :id="`${account.id}-passoword`"
            :name="account.login"
            type="text"
            v-model="account.login"
            :maxLenght="50"
            required
        />
        <InputBase
            :id="`${account.id}-passoword`"
            :name="account.passoword"
            type="password"
            v-model="account.passoword"
            :maxLenght="10"
            required
            v-if="account.type !== AccountType.LDAP"
        />

        <ButtonDelete :id="account.id" />
    </div>
</template>

<style lang="scss" scoped>
.account {
    & > label.big {
        grid-column: span 2;
    }
}

</style>
