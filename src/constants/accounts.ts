import type { Account } from "@/types/account"
import { AccountType } from "@/types/account"

export const accountsList: Account[] = [
        {
        id: 0,
        label: 'First',
        login: 'Aaaaaa',
        password: 'Qwery1',
        type: AccountType.LOCAL
    },
    {
        id: 1,
        label: 'Second',
        login: 'BBBBBB',
        password: 'Qwery1',
        type: AccountType.LDAP
    }
]