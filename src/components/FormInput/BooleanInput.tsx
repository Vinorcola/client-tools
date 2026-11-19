import { FaCheck, FaX } from "react-icons/fa6"

import ChoiceInput, { Option } from "./ChoiceInput"

import type { InputProps } from "."

const YES_NO_OPTIONS: Option[] = [
    { id: "true", translationKey: "global.yes", icon: <FaCheck className="text-green-600" /> },
    { id: "false", translationKey: "global.no", icon: <FaX className="text-red-500" /> },
]

export default function BooleanInput(props: InputProps) {
    return <ChoiceInput {...props} unknownTranslationKey="global.unknown" options={YES_NO_OPTIONS} />
}
