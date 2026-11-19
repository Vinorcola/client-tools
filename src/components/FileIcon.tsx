import { FaFile, FaFileImage, FaFilePdf, FaFileZipper } from "react-icons/fa6"

interface Props {
    mimeType: string
}

export default function FileIcon(props: Props) {
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
