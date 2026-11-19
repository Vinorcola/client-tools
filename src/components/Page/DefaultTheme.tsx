import { t } from "i18next"
import type { ReactNode } from "react"
import { FaAnglesLeft } from "react-icons/fa6"

import type { Action } from "../ActionContainer.js"

import Page, { TimedSubject } from "./index.js"

interface TitleProps {
    icon?: ReactNode
    timing?: TimedSubject
    backActions?: Action[]
    actions?: Action[]
    children?: ReactNode
}

export function Title(props: TitleProps) {
    return (
        <header className="sticky flex gap-2 items-center justify-between top-0 bg-mandalay-800 p-2 mb-6 z-10">
            <Page.ActionContainer actions={props.backActions ?? []} defaultIcon={<FaAnglesLeft />} />
            <h1 className="text-3xl text-mandalay-200 font-bold text-center -mt-2">
                {props.icon} {props.children}
            </h1>
            {props.timing ? (
                <Page.Timing createdAt={props.timing.createdAt} lastUpdatedAt={props.timing.lastUpdatedAt} />
            ) : (
                <Page.ActionContainer actions={props.actions ?? []} />
            )}
        </header>
    )
}

export function Timing(props: TimedSubject) {
    return (
        <div className="text-sm text-mandalay-200 text-right">
            {t("global.createdAt", { date: props.createdAt.toLocaleDateString() })}
            {props.lastUpdatedAt.getTime() !== props.createdAt.getTime() && (
                <>
                    <br />
                    {t("global.lastUpdatedAt", { date: props.lastUpdatedAt.toLocaleDateString() })}
                </>
            )}
        </div>
    )
}
