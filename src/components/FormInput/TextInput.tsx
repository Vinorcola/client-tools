import type { InputValueFormater, InputProps } from "./index.js"

interface Props extends InputProps {
    formater?: InputValueFormater
}

export default function TextInput(props: Props) {
    return (
        <textarea
            name={props.id}
            className="h-36 w-full px-4 py-2 border-0 outline-0 shadow-none bg-yellow-200/50"
            required={!props.optional}
            autoFocus={props.autofocus}
            value={props.value}
            onChange={(event) => {
                props.onChange(props.formater?.(event.currentTarget.value) ?? event.currentTarget.value)
            }}
        />
    )
}
