import { Fragment } from "react"

interface Props {
    content: string | null
}

export default function MultiLineText(props: Props) {
    if (props.content === null) {
        return null
    }

    return props.content.split("\n").map((line, index, list) =>
        index === list.length - 1 ? (
            line
        ) : (
            <Fragment key={index}>
                {line}
                <br />
            </Fragment>
        ),
    )
}
