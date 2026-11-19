import type { ReactNode } from "react"

interface Props {
    icon?: ReactNode
    children?: ReactNode
}

export default function IconLabel(props: Props) {
    return (
        <span className="inline-flex items-center justify-center flex-nowrap gap-2 align-middle">
            {props.icon}
            {props.children}
        </span>
    )
}
