import cx from "@vinorcola/utils/classNames"
import type { ReactNode } from "react"

interface Props {
    className?: string
    align?: "left" | "center" | "right" // Default to "left"
    children?: ReactNode
}

export default function Container(props: Props) {
    return (
        <div
            className={cx(
                "button-container flex flex-wrap gap-2",
                props.align === "center" && "justify-center",
                props.align === "right" && "justify-end",
                props.className,
            )}
        >
            {props.children}
        </div>
    )
}
