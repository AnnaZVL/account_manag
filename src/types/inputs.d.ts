export interface InputProp {
    id: string
    name: string;
    modelValue: string;
    type: InputType;
    errorMessage?: string;
    maxLenght?: number;
    required?: boolean
}

export type InputType = 'text' | 'password';