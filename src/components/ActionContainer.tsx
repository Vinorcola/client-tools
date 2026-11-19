import type { ReactNode } from "react"

import { ButtonContainer, LinkButton } from "./Button/index.js"

export interface Action {
    target: string
    icon?: ReactNode
    children?: ReactNode
}

interface Props {
    className?: string
    actions: Action[]
    defaultIcon?: ReactNode
}

export default function ActionContainer(props: Props) {
    return (
        <ButtonContainer className={props.className}>
            {props.actions.map((action) => (
                <LinkButton key={action.target} target={action.target} icon={action.icon ?? props.defaultIcon}>
                    {action.children}
                </LinkButton>
            ))}
        </ButtonContainer>
    )
}
