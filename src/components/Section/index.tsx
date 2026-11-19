import { Children, type ReactNode } from "react"

import ActionContainer, { type Action } from "../ActionContainer.js"
import { SectionLoader } from "../Loader.js"
import { Container, Content, ContentSpacing, EmptyContent, Header, Title } from "./DefaultTheme.js"

export interface SectionProps {
    id?: string
    title: string
    icon?: ReactNode
    actions?: Action[]
    emptyMessage?: string
}

interface Props extends SectionProps {
    isLoading?: boolean
    transparent?: boolean
    children?: ReactNode
}

export default function Section(props: Props) {
    const isEmpty =
        Children.toArray(props.children).filter(
            (child) =>
                props.children !== null &&
                props.children !== undefined &&
                props.children !== false &&
                (typeof child !== "string" || child.length > 0),
        ).length === 0

    return (
        <Section.Container id={props.id} transparent={props.transparent} empty={isEmpty}>
            <Section.Header>
                <Section.Title icon={props.icon}>{props.title}</Section.Title>
                <Section.ActionContainer actions={props.actions ?? []} />
            </Section.Header>
            <Section.Content>
                {props.isLoading ? (
                    <SectionLoader />
                ) : isEmpty ? (
                    <Section.EmptyContent>{props.emptyMessage}</Section.EmptyContent>
                ) : (
                    props.children
                )}
            </Section.Content>
        </Section.Container>
    )
}

Section.Container = Container
Section.Header = Header
Section.Title = Title
Section.ActionContainer = ActionContainer
Section.Content = Content
Section.ContentSpacing = ContentSpacing
Section.EmptyContent = EmptyContent
