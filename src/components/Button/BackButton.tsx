import type { ReactNode } from "react"
import { FaAnglesLeft } from "react-icons/fa6"

import LinkButton from "./LinkButton"

import type { ButtonType } from "."

interface Props {
    type?: ButtonType
    target: string
    children?: ReactNode
}

export default function BackButton(props: Props) {
    return (
        <LinkButton type={props.type} target={props.target} icon={<FaAnglesLeft />}>
            {props.children}
        </LinkButton>
    )
}
