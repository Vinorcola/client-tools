import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function EmptyList(props: Props) {
    return <div className="px-4 py-2 small-caps text-section-muted bg-table-header">{props.children}</div>
}
