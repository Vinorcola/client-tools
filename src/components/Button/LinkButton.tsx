import type { ReactNode } from "react"
import { Link } from "react-router"

import { resolveButtonClassName, type ButtonType } from "./index.js"

interface Props {
    type?: ButtonType
    target: string
    icon?: ReactNode
    download?: boolean
    children?: ReactNode
}

export default function LinkButton(props: Props) {
    return props.download ? (
        <a href={props.target} className={resolveButtonClassName(props.type ?? "base", "px-4")} download>
            {props.icon}
            {props.children}
        </a>
    ) : (
        <Link to={props.target} className={resolveButtonClassName(props.type ?? "base", "px-4")}>
            {props.icon}
            {props.children}
        </Link>
    )
}
