import type { Account } from '@/modules/account/types/account'
import  { AccountType } from '@/modules/account/types/account'
import { useStorage } from '@/composables/useStorage'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountStore = defineStore('accountStore', () => {
    let accounts = ref<Account[]>([]);

    const { toLocalStorage, fromLocalStorage } = useStorage<Account>();
    
    const addAccount = ():void => {
        const newAccount: Account = {
            id: Date.now(),
            label: [{text: ''}],
            login: '',
            password: '',
            type: AccountType.LOCAL
        }
        accounts.value.push(newAccount)
        
        toLocalStorage('accounts', accounts.value);
    }

    const deleteAccount = (id: Account['id'] ): void => {
        accounts.value = accounts.value.filter((acc: Account) => acc.id !== id);
        
        toLocalStorage('accounts', accounts.value);
    }

    const updateAccount = (account: Account): void => {
        const idx = accounts.value.findIndex(acc => acc.id === account.id);
        if (idx !== -1) {
            accounts.value[idx] = { ...account };
            toLocalStorage('accounts', accounts.value);
        }
    }    

    const loadAccounts = (): void => {        
        accounts.value = fromLocalStorage('accounts', [{
            id: Date.now(),
            label: [{text: ''}],
            login: '',
            password: '',
            type: AccountType.LOCAL
        }]);        
    }

    const clearAccounts = (): void => {
        accounts.value = [];
        toLocalStorage('accounts', accounts.value);
    };

    return {
        accounts,
        addAccount,
        deleteAccount,
        updateAccount,   
        loadAccounts,
        clearAccounts    
    }
})