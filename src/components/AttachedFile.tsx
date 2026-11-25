import { FaFile, FaFileImage, FaFilePdf, FaFileZipper } from "react-icons/fa6"

import IconLabel from "./IconLabel.js"

interface Props {
    id: string
    originalName: string
    mimeType: string
    size: number
}

export default function AttachedFile(props: Props) {
    const canBeOpened = fileCanBeOpenedInBrowser(props.mimeType)

    return (
        <a
            href={`/api${props.id}/${canBeOpened ? "show" : "download"}`}
            className="inline-block border border-mandalay-400 bg-mandalay-300/75 hover:border-mandalay-500 hover:bg-mandalay-400/75 rounded px-1"
            download={!canBeOpened}
            target={canBeOpened ? "_blank" : undefined}
            rel={canBeOpened ? "noopener noreferrer" : undefined}
        >
            <IconLabel icon={<FileIcon mimeType={props.mimeType} />}>{props.originalName}</IconLabel>
        </a>
    )
}

function fileCanBeOpenedInBrowser(mimeType: string) {
    if (mimeType.startsWith("image/")) {
        return true
    }

    switch (mimeType) {
        case "application/pdf":
            return true

        default:
            return false
    }
}

export function FileIcon(props: Pick<Props, "mimeType">) {
    if (props.mimeType.startsWith("image/")) {
        return <FaFileImage />
    }

    switch (props.mimeType) {
        case "application/pdf":
            return <FaFilePdf />

        case "application/zip":
            return <FaFileZipper />

        default:
            return <FaFile />
    }
}
