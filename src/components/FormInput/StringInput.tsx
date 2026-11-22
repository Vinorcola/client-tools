import { FormLine, useInputState } from "../Form/index.js"

import type { InputValueFormater, InputProps, InputLineProps } from "./index.js"

interface Props extends InputProps {
    formater?: InputValueFormater
}

export function StringInputLine({ title, ...props }: InputProps & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <StringInput {...props} />
        </FormLine>
    )
}

export default function StringInput(props: Props) {
    const { value, onChange } = useInputState(props.id)

    return (
        <input
            name={props.id}
            className="h-9 w-full px-4 py-2 border-0 outline-0 shadow-none bg-yellow-200/50"
            required={!props.optional}
            autoFocus={props.autofocus}
            value={value}
            onChange={(event) => {
                onChange(props.formater?.(event.currentTarget.value) ?? event.currentTarget.value)
            }}
        />
    )
}
