export { default as BooleanInput } from "./BooleanInput.js"
export { default as ChoiceInput, type Option as ChoiceOption } from "./ChoiceInput.js"
export { default as DateInput } from "./DateInput.js"
export { default as FileInput, type FileInputValue, type FileValue, type LocalFileValue } from "./FileInput.js"
export { default as IntegerInput } from "./IntegerInput.js"
export { default as PriceInput } from "./PriceInput.js"
export { CLASSNAMES as SELECT_CLASSNAMES, type Option as SelectOption, STYLES as SELECT_STYLES } from "./Select.js"
export { default as StringInput } from "./StringInput.js"
export { default as TextInput } from "./TextInput.js"

export type InputValueFormater = (value: string) => string

export interface InputProps<Value = string> {
    id: string
    optional: boolean
    autofocus?: boolean
    value: Value
    onChange: (value: Value) => void
}
