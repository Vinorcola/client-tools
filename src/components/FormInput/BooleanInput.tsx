import { t } from "i18next"
import { FaCheck, FaX } from "react-icons/fa6"

import FormLine from "../Form/FormLine.js"
import ChoiceInput, { type Option } from "./ChoiceInput.js"

import type { InputLineProps, InputProps } from "./index.js"

const YES_NO_OPTIONS: Option[] = [
    { id: "true", title: t("global.yes"), icon: <FaCheck className="text-green-600" /> },
    { id: "false", title: t("global.no"), icon: <FaX className="text-red-500" /> },
]

export function BooleanInputLine({ title, ...props }: InputProps & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <BooleanInput {...props} />
        </FormLine>
    )
}

export default function BooleanInput(props: InputProps) {
    return <ChoiceInput {...props} options={YES_NO_OPTIONS} />
}
