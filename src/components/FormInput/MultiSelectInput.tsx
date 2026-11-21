import { t } from "i18next"
import { useMemo } from "react"
import Select from "react-select"

import { useInputState } from "../Form/index.js"
import { CLASSNAMES, Option, SelectOption, STYLES } from "./SelectInput.js"

import { InputProps } from "./index.js"

interface Props extends InputProps {
    readonly options: Option[]
}

export default function MultiSelectInput(props: Props) {
    const { value, onChange } = useInputState<string[]>(props.id)
    const options = useMemo(
        () =>
            props.options.map((option) => ({
                value: option.id,
                label: t(option.translationKey),
            })),
        [props.options],
    )
    const selectedOptions = useMemo(() => {
        const selection = new Set(value)

        return options.filter((option) => selection.has(option.value))
    }, [options, value])

    return (
        <Select<SelectOption, true>
            name={props.id}
            placeholder=""
            isClearable={props.optional}
            classNames={CLASSNAMES}
            styles={STYLES}
            options={options}
            autoFocus={props.autofocus}
            value={selectedOptions}
            onChange={(options) => {
                onChange(options.map((option) => option.value))
            }}
        />
    )
}
