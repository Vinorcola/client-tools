import { t } from "i18next"
import { FaCheck, FaX } from "react-icons/fa6"

import IconLabel from "./IconLabel.js"

interface Props {
    value: boolean
}

export default function BooleanDisplayer(props: Props) {
    return props.value ? (
        <IconLabel icon={<FaCheck className="text-green-600" />}>{t("global.yes")}</IconLabel>
    ) : (
        <IconLabel icon={<FaX className="text-red-500" />}>{t("global.no")}</IconLabel>
    )
}
