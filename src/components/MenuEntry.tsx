import { ReactNode } from "react"
import { Link } from "react-router"

import IconLabel from "./IconLabel.js"

interface Props {
    target: string
    icon?: ReactNode
    children: ReactNode
}

export default function MenuEntry(props: Props) {
    return (
        <li className="not-first:border-t-2 border-base-300">
            <Link
                to={props.target}
                className="block p-1 hover:bg-mandalay-200/50 w-6 overflow-hidden text-nowrap group-hover:w-48 group-hover:text-wrap"
            >
                <IconLabel icon={props.icon}>{props.children}</IconLabel>
            </Link>
        </li>
    )
}
