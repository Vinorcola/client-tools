export { default as BooleanInput, BooleanInputLine } from "./BooleanInput.js"
export { default as ChoiceInput, ChoiceInputLine, type Option as ChoiceOption } from "./ChoiceInput.js"
export { default as DateInput, DateInputLine } from "./DateInput.js"
export {
    default as FileInput,
    FileInputLine,
    type FileInputValue,
    type FileValue,
    type LocalFileValue,
} from "./FileInput.js"
export { default as IntegerInput, IntegerInputLine } from "./IntegerInput.js"
export { default as LazyMultiSelectInput, LazyMultiSelectInputLine } from "./LazyMultiSelectInput.js"
export { default as LazySelectInput, LazySelectInputLine } from "./LazySelectInput.js"
export { default as MultiSelectInput, MultiSelectInputLine } from "./MultiSelectInput.js"
export { default as PriceInput, PriceInputLine } from "./PriceInput.js"
export {
    default as SelectInput,
    SelectInputLine,
    LoadingSelectInput,
    type Option as SelectOption,
} from "./SelectInput.js"
export { default as StringInput, StringInputLine } from "./StringInput.js"
export { default as TextInput, TextInputLine } from "./TextInput.js"

export type InputValueFormater = (value: string) => string

export interface InputProps {
    id: string
    optional?: boolean
    autofocus?: boolean
}

export interface InputLineProps {
    title: string
}
