import { createContext, ReactNode, useContext } from "react"

const MenuContext = createContext<ReactNode>(null)

export function useMenu() {
    return useContext(MenuContext)
}

interface Props {
    menu?: ReactNode
    children?: ReactNode
}

export default function MenuProvider(props: Props) {
    return <MenuContext value={props.menu}>{props.children}</MenuContext>
}
