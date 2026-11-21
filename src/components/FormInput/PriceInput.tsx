import { useInputState } from "../Form/index.js"

import type { InputProps } from "./index.js"

export default function PriceInput(props: InputProps) {
    const { value, onChange } = useInputState(props.id)

    return (
        <input
            name={props.id}
            className="h-9 w-full px-4 py-2 border-0 outline-0 shadow-none bg-yellow-200/50"
            type="number"
            step={0.01}
            required={!props.optional}
            autoFocus={props.autofocus}
            value={value}
            onChange={(event) => {
                onChange(event.currentTarget.value)
            }}
        />
    )
}
