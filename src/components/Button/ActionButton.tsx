import type { ReactNode } from "react"

import { resolveButtonClassName, type ButtonType } from "./index.js"

interface Props {
    type?: ButtonType // Default to "base"
    icon?: ReactNode
    children?: ReactNode
    onClick(): void
}

export default function ActionButton(props: Props) {
    return (
        <button
            type="button"
            className={resolveButtonClassName(props.type ?? "base")}
            onClick={() => {
                props.onClick()
            }}
        >
            {props.icon}
            {props.children}
        </button>
    )
}
