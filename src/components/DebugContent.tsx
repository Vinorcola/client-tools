import { PROD_ENV } from "../env.js"

interface Props {
    content: any
}

export default function DebugContent(props: Props) {
    if (PROD_ENV) {
        return null
    }

    return <pre>{JSON.stringify(props.content, undefined, 4)}</pre>
}
