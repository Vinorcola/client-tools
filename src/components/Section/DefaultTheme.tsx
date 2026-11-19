import cx from "@vinorcola/utils/classNames"
import { t } from "i18next"
import type { ReactNode } from "react"

import IconLabel from "../IconLabel.js"

interface Props {
    children?: ReactNode
}

interface ContainerProps extends Props {
    id?: string
    transparent?: boolean
    empty: boolean
}

export function Container(props: ContainerProps) {
    return (
        <section
            id={props.id}
            className={cx(
                "relative",
                props.empty ? "bg-section-header" : props.transparent ? null : "bg-section-content",
            )}
        >
            {props.children}
        </section>
    )
}

export function Header(props: Props) {
    return (
        <header className="bg-section-header px-2 py-1 flex justify-between items-center [&>.button-container]:pt-1/2">
            {props.children}
        </header>
    )
}

interface TitleProps extends Props {
    icon?: ReactNode
}

export function Title(props: TitleProps) {
    return (
        <h2 className="text-2xl text-title font-bold">
            <IconLabel icon={props.icon}>{props.children}</IconLabel>
        </h2>
    )
}

export function Content(props: Props) {
    return <main>{props.children}</main>
}

export function ContentSpacing(props: Props) {
    return <div className="px-4 py-2">{props.children}</div>
}

export function EmptyContent(props: Props) {
    return (
        <ContentSpacing>
            <span className="small-caps text-section-muted">{props.children || t("global.empty")}</span>
        </ContentSpacing>
    )
}
