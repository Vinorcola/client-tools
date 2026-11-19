import type { InputProps } from "."

export default function PriceInput(props: InputProps) {
    return (
        <input
            name={props.id}
            className="h-9 w-full px-4 py-2 border-0 outline-0 shadow-none bg-yellow-200/50"
            type="number"
            step={0.01}
            required={!props.optional}
            autoFocus={props.autofocus}
            value={props.value}
            onChange={(event) => {
                props.onChange(event.currentTarget.value)
            }}
        />
    )
}
