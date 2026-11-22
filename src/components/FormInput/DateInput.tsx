import { FormLine, useInputState } from "../Form/index.js"

import type { InputLineProps, InputProps } from "./index.js"

export function DateInputLine({ title, ...props }: InputProps & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <DateInput {...props} />
        </FormLine>
    )
}

export default function DateInput(props: InputProps) {
    const { value, onChange } = useInputState(props.id)

    return (
        <input
            name={props.id}
            className="h-9 w-full px-4 py-2 border-0 outline-0 shadow-none bg-yellow-200/50"
            type="date"
            required={!props.optional}
            autoFocus={props.autofocus}
            value={value}
            onChange={(event) => {
                onChange(event.currentTarget.value)
            }}
        />
    )
}
