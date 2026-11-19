export { default as BooleanInput } from "./BooleanInput"
export { default as ChoiceInput, type Option as ChoiceOption } from "./ChoiceInput"
export { default as DateInput } from "./DateInput"
export { default as FileInput, type FileInputValue, type FileValue, type LocalFileValue } from "./FileInput"
export { default as IntegerInput } from "./IntegerInput"
export { default as PriceInput } from "./PriceInput"
export { CLASSNAMES as SELECT_CLASSNAMES, type Option as SelectOption, STYLES as SELECT_STYLES } from "./Select"
export { default as StringInput } from "./StringInput"
export { default as TextInput } from "./TextInput"

export type InputValueFormater = (value: string) => string

export interface InputProps<Value = string> {
    id: string
    optional: boolean
    autofocus?: boolean
    value: Value
    onChange: (value: Value) => void
}
