import type { ReactNode } from "react"

import { resolveButtonClassName, type ButtonType } from "./index.js"

interface Props {
    type?: ButtonType
    submitting: boolean
    icon?: ReactNode
    children?: ReactNode
}

export default function SubmitButton(props: Props) {
    return (
        <button type="submit" className={resolveButtonClassName(props.type ?? "primary")} disabled={props.submitting}>
            {props.icon}
            {props.children}
        </button>
    )
}
