import { t } from "i18next"
import { useMemo } from "react"
import Select from "react-select"

import { CLASSNAMES, Option, SelectOption, STYLES } from "./SelectInput.js"

import { InputProps } from "./index.js"

interface Props extends InputProps<string[]> {
    readonly options: Option[]
}

export default function MultiSelectInput(props: Props) {
    const options = useMemo(
        () =>
            props.options.map((option) => ({
                value: option.id,
                label: t(option.translationKey),
            })),
        [props.options],
    )
    const selectedOptions = useMemo(() => {
        const selection = new Set(props.value)

        return options.filter((option) => selection.has(option.value))
    }, [options, props.value])

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
                props.onChange(options.map((option) => option.value))
            }}
        />
    )
}
