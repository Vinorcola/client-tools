export { default as BooleanInput } from "./BooleanInput.js"
export { default as ChoiceInput, type Option as ChoiceOption } from "./ChoiceInput.js"
export { default as DateInput } from "./DateInput.js"
export { default as FileInput, type FileInputValue, type FileValue, type LocalFileValue } from "./FileInput.js"
export { default as IntegerInput } from "./IntegerInput.js"
export { default as LazyMultiSelectInput } from "./LazyMultiSelectInput.js"
export { default as LazySelectInput } from "./LazySelectInput.js"
export { default as MultiSelectInput } from "./MultiSelectInput.js"
export { default as PriceInput } from "./PriceInput.js"
export { default as SelectInput, LoadingSelectInput, type Option as SelectOption } from "./SelectInput.js"
export { default as StringInput } from "./StringInput.js"
export { default as TextInput } from "./TextInput.js"

export type InputValueFormater = (value: string) => string

export interface InputProps {
    id: string
    optional: boolean
    autofocus?: boolean
}
