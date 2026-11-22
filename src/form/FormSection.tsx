import { ReactNode } from "react"

import { Section, type SectionProps } from "../components/index.js"

interface Props extends SectionProps {
    children: ReactNode
}

export default function FormSection({ children, ...props }: Props) {
    return (
        <Section {...props}>
            <table className="table bg-section">
                <tbody>{children}</tbody>
            </table>
        </Section>
    )
}
