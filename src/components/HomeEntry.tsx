import { ReactNode } from "react"
import { Link } from "react-router"

import IconLabel from "./IconLabel.js"

interface Props {
    target: string
    icon?: ReactNode
    children: ReactNode
}

export default function HomeEntry(props: Props) {
    return (
        <li>
            <Link to={props.target} className="hover:bg-mandalay-200">
                <IconLabel icon={props.icon}>{props.children}</IconLabel>
            </Link>
        </li>
    )
}
