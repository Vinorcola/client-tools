import cx from "@vinorcola/utils/classNames"
import type { ReactNode } from "react"

import { resolveButtonClassName, type ButtonType } from "."

interface Props {
    type?: ButtonType
    className?: string
    icon?: ReactNode
    selected?: boolean
    children?: ReactNode
    onClick(): void
}

export default function SelectableButton(props: Props) {
    return (
        <button
            type="button"
            className={resolveButtonClassName(
                props.type ?? "base",
                cx(props.selected && "btn-accent", props.className),
            )}
            onClick={() => {
                props.onClick()
            }}
        >
            {props.icon}
            {props.children}
        </button>
    )
}
