import cx from "@vinorcola/utils/classNames"
import { useEffect, type ReactNode } from "react"

import ActionContainer, { type Action } from "../ActionContainer.js"
import { Timing, Title } from "./DefaultTheme.js"
import { useMenu } from "./MenuProvider.js"

export { default as MenuProvider } from "./MenuProvider.js"

export interface TimedSubject {
    createdAt: Date
    lastUpdatedAt: Date
}

interface Props {
    title: string
    home?: boolean
    icon?: ReactNode
    timing?: TimedSubject
    backActions?: Action[]
    actions?: Action[]
    children?: ReactNode
}

export default function Page(props: Props) {
    const menu = useMenu()

    useEffect(() => {
        document.title = props.title
    }, [props.title])

    return (
        <div>
            {props.home || menu}
            <div className={cx(props.home || "ml-10")}>
                <Page.Title
                    icon={props.icon}
                    timing={props.timing}
                    backActions={props.backActions}
                    actions={props.actions}
                >
                    {props.title}
                </Page.Title>
                <div className="flex flex-col gap-8 px-6 pb-[30vh]">{props.children}</div>
            </div>
        </div>
    )
}

Page.Title = Title
Page.ActionContainer = ActionContainer
Page.Timing = Timing
