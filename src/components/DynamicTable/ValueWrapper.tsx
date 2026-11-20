import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function ValueWrapper(props: Props) {
    return <span className="[&>svg:first-child]:mr-1.5 text-nowrap">{props.children}</span>
}
