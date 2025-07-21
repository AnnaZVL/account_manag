import type { Account } from '@/types/account'
import  { AccountType } from '@/types/account'
import { accountsList } from '@/constants/accounts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountStore = defineStore('accountStore', () => {
    let account: Account = {
        id: 0,
        label: '',
        login: '',
        password: '',
        type: AccountType.LOCAL
    }

    let accountsStore = ref<Account[]>([]);

    const addAccount = ():void => {
        accountsStore.value.push(account)
    }

    const deleteAccount = (id: Account['id'] ): void => {
        accountsStore.value = accountsStore.value.filter(acc => acc.id !== id)
    }

    const toLocalStoradge = ():void => {
        localStorage.setItem('accounts', JSON.stringify(accountsList))
    }

    const fromLocalStoradge = ():void => {
        const accounts = localStorage.getItem('accounts')
        if (!accounts) {
            toLocalStoradge()
        } 
        accountsStore.value = JSON.parse(localStorage.getItem('accounts') || '[]')
    }

    return {
        accountsStore,
        addAccount,
        deleteAccount,
        toLocalStoradge,
        fromLocalStoradge
    }
})