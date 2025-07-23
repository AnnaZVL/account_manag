import { Label } from "@/types/inputs";

export interface Account {
    id: number
    label: Label[];
    type: AccountType
    login: string
    password: string | null
};

export enum AccountType {
    LOCAL = 'Локальная',
    LDAP = 'LDAP'
}