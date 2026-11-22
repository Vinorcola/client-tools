import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useMemo } from "react"

import type { FileInputValue } from "../FormInput/FileInput.js"
import FormButtons, { ButtonsProps } from "./FormButtons.js"

export { default as EmptyForm } from "./EmptyForm.js"
export { default as FormButtons } from "./FormButtons.js"
export { default as FormLine } from "./FormLine.js"
export { default as FormSection } from "./FormSection.js"

export type InputValue = string | string[] | FileInputValue
export type FormState = { [input: string]: InputValue }

interface Props<State extends FormState> extends FormControl<State> {
    onSubmit: (formData: FormData) => void
    children?: ReactNode
}

interface FormControl<State extends FormState> {
    state: State
    onChange: Dispatch<SetStateAction<State>>
}

const Context = createContext<FormControl<FormState>>({
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
            <Context value={useMemo(() => ({ state, onChange }), [state, onChange]) as any}>{children}</Context>
            <FormButtons {...buttonProps} />
        </form>
    )
}
