import type { ReactNode } from "react"

import Section, { type SectionProps } from "./Section/index.js"

interface Props extends SectionProps {
    content: ReactNode
    emptyMessage: string
}

export default function DescriptionSection({ content, ...sectionProps }: Props) {
    return (
        <Section {...sectionProps}>
            {content === null ? null : <Section.ContentSpacing>{content}</Section.ContentSpacing>}
        </Section>
    )
}
