interface Props {
    content: any
}

const DEV_ENV =
    typeof process.env.NODE_ENV === "string"
        ? process.env.NODE_ENV !== "production"
        : ((import.meta as any).env?.DEV ?? false)

export default function DebugContent(props: Props) {
    if (!DEV_ENV) {
        return null
    }

    return <pre>{JSON.stringify(props.content, undefined, 4)}</pre>
}
