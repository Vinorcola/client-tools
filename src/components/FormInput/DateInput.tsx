import type { InputProps } from "./index.js"

export default function DateInput(props: InputProps) {
    return (
        <input
            name={props.id}
            className="h-9 w-full px-4 py-2 border-0 outline-0 shadow-none bg-yellow-200/50"
            type="date"
            required={!props.optional}
            autoFocus={props.autofocus}
            value={props.value}
            onChange={(event) => {
                props.onChange(event.currentTarget.value)
            }}
        />
    )
}
