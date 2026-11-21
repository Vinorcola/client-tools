import { createContext, ReactNode, useContext, useMemo } from "react"

import { FileInputValue } from "../FormInput/FileInput.js"
import FormButtons, { ButtonsProps } from "./FormButtons.js"

export { default as EmptyForm } from "./EmptyForm.js"
export { default as FormButtons } from "./FormButtons.js"
export { default as FormLine } from "./FormLine.js"

export type InputValue = string | string[] | FileInputValue
export type FormState = { [input: string]: InputValue }

interface Props<State extends FormState> extends FormControl<State> {
    onSubmit: (formData: FormData) => void
    children?: ReactNode
}

interface FormControl<State extends FormState> {
    state: State
    onChange: (input: keyof State, state: InputValue) => void
}

const Context = createContext<FormControl<FormState>>({
    state: {},
    onChange: () => {},
})

export function useInputState<Value extends InputValue = string>(id: string) {
    const formState = useContext(Context)

    return {
        value: formState.state[id] as Value,
        onChange: (value: Value) => {
            formState.onChange(id, value)
        },
    }
}

export default function Form<State extends FormState>({
    state,
    onChange,
    onSubmit,
    children,
    ...buttonProps
}: Props<State> & ButtonsProps) {
    return (
        <form
            className="flex flex-col gap-8"
            onSubmit={(event) => {
                event.preventDefault()
                onSubmit(new FormData(event.target))
            }}
        >
            <Context value={useMemo(() => ({ state, onChange }), [state, onChange])}>{children}</Context>
            <FormButtons {...buttonProps} />
        </form>
    )
}
