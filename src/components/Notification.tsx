import cx from "@vinorcola/utils/classNames"
import type { ReactNode } from "react"

interface Props {
    type: NotificationType
    title: string
    icon: ReactNode
    children?: ReactNode
}

export type NotificationType = "info" | "success" | "warning" | "drop" | "error"

interface TypeOptions {
    backgroundColor: string
    iconBackgroundColor: string
    borderColor: string
    titleColor: string
}

const OPTIONS: Record<NotificationType, TypeOptions> = {
    info: {
        backgroundColor: "bg-light-info",
        iconBackgroundColor: "bg-info",
        borderColor: "border-info",
        titleColor: "text-info",
    },
    success: {
        backgroundColor: "bg-light-success",
        iconBackgroundColor: "bg-success",
        borderColor: "border-success",
        titleColor: "text-success",
    },
    warning: {
        backgroundColor: "bg-light-warning",
        iconBackgroundColor: "bg-warning",
        borderColor: "border-warning",
        titleColor: "text-warning",
    },
    drop: {
        backgroundColor: "bg-light-error",
        iconBackgroundColor: "bg-error",
        borderColor: "border-error",
        titleColor: "text-error",
    },
    error: {
        backgroundColor: "bg-light-error",
        iconBackgroundColor: "bg-error",
        borderColor: "border-error",
        titleColor: "text-error",
    },
}

export default function Notification(props: Props) {
    const options = OPTIONS[props.type]

    return (
        <aside className={cx("flex", options.backgroundColor)}>
            <div className={cx("flex items-center p-2 text-base-100 text-3xl", options.iconBackgroundColor)}>
                {props.icon}
            </div>
            <div className={cx("grow border-t-4 p-4 pt-2", options.borderColor)}>
                <h4 className={cx("m-0 text-xl font-bold", options.titleColor)}>{props.title}</h4>
                <main className="p-2">{props.children}</main>
            </div>
        </aside>
    )
}
