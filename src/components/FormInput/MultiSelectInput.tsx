import { useMemo } from "react"
import Select from "react-select"

import { FormLine, useInputState } from "../Form/index.js"
import { CLASSNAMES, Option, SelectOption, STYLES } from "./SelectInput.js"

import { InputLineProps, InputProps } from "./index.js"

interface Props extends InputProps {
    readonly options: Option[]
}

export function MultiSelectInputLine({ title, ...props }: Props & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <MultiSelectInput {...props} />
        </FormLine>
    )
}

export default function MultiSelectInput(props: Props) {
    const { value, onChange } = useInputState<string[]>(props.id)
    const options = useMemo(
        () =>
            props.options.map((option) => ({
                value: option.id,
                label: option.title,
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
