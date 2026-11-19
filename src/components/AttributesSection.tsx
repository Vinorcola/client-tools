import type { ReactNode } from "react"

import Section, { SectionProps } from "./Section/index.js"

export interface Attribute {
    id: string
    title: ReactNode
    content?: ReactNode
}

interface Props extends SectionProps {
    details: Attribute[]
}

export default function AttributesSection({ details, ...sectionProps }: Props) {
    return (
        <Section {...sectionProps}>
            <table className="table">
                <tbody>
                    {details.map((attribute) => (
                        <tr
                            key={attribute.id}
                            className="even:[&>th]:bg-table-line-title-even odd:[&>th]:bg-table-line-title-odd even:[&>td]:bg-table-line-even odd:[&>td]:bg-table-line-odd hover:bg-table-line-hover"
                        >
                            <th className="w-3xs">{attribute.title}</th>
                            <td>{attribute.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Section>
    )
}
