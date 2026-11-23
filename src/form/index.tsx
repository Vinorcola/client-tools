import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useMemo } from "react"

import FormButtons, { ButtonsProps } from "./FormButtons.js"
import type { FileInputValue } from "./Input/FileInput.js"

export { default as EmptyForm } from "./EmptyForm.js"
export { default as FormButtons } from "./FormButtons.js"
export { default as FormLine } from "./FormLine.js"
export { default as FormSection } from "./FormSection.js"
export {
    BooleanInput,
    BooleanInputLine,
    ChoiceInput,
    ChoiceInputLine,
    type ChoiceOption,
    DateInput,
    DateInputLine,
    FileInput,
    FileInputLine,
    type FileInputValue,
    type FileValue,
    type LocalFileValue,
    IntegerInput,
    IntegerInputLine,
    LazyMultiSelectInput,
    LazyMultiSelectInputLine,
    LazySelectInput,
    LazySelectInputLine,
    LoadingSelectInput,
    MultiSelectInput,
    MultiSelectInputLine,
    PriceInput,
    PriceInputLine,
    SelectInput,
    SelectInputLine,
    type SelectOption,
    StringInput,
    StringInputLine,
    TextInput,
    TextInputLine,
    type InputValueFormater,
    type InputProps,
} from "./Input/index.js"
export { type FileUpload, type UploadedFiles, useFileUpload } from "./upload.js"

export type InputValue = string | string[] | FileInputValue
export type FormState<Keys extends string> = Record<Keys, InputValue>

interface Props<Keys extends string> extends FormControl<Keys> {
    onSubmit: (formData: FormData) => void
    children?: ReactNode
}

interface FormControl<Keys extends string> {
    state: FormState<Keys>
    onChange: Dispatch<SetStateAction<FormState<Keys>>>
}

const Context = createContext<FormControl<string>>({
    state: {},
    onChange: () => {},
})

export function useInputState<Value extends InputValue = string>(id: string) {
    const formState = useContext(Context)
    const onChange = useCallback(
        (value: Value) => {
            formState.onChange((formState) => ({
                ...formState,
                [id]: value,
            }))
        },
        [id],
    )

    return {
        value: formState.state[id] as Value,
        onChange,
    }
}

export default function Form<Keys extends string>({
    state,
    onChange,
    onSubmit,
    children,
    ...buttonProps
}: Props<Keys> & ButtonsProps) {
    return (
        <form
            className="flex flex-col gap-8"
            onSubmit={(event) => {
                event.preventDefault()
                onSubmit(new FormData(event.target))
            }}
        >
            <Context value={useMemo(() => ({ state, onChange }), [state, onChange]) as any}>{children}</Context>
            <FormButtons {...buttonProps} />
        </form>
    )
}
