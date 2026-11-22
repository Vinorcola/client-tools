import cx from "@vinorcola/utils/classNames"
import { useMemo } from "react"
import Select, { type ClassNamesConfig, type StylesConfig } from "react-select"

import { Loader } from "../../components/index.js"
import FormLine from "../FormLine.js"
import { useInputState } from "../index.js"

import { InputLineProps, InputProps } from "./index.js"

export interface Option {
    readonly id: string
    readonly title: string
}

export interface SelectOption {
    readonly value: string
    readonly label: string
}

interface Props extends InputProps {
    readonly options: Option[]
}

export const STYLES: StylesConfig<SelectOption> = {
    control({
        backgroundColor, // oxlint-disable-line @typescript-eslint/no-unused-vars
        borderColor, // oxlint-disable-line @typescript-eslint/no-unused-vars
        borderRadius, // oxlint-disable-line @typescript-eslint/no-unused-vars
        borderStyle, // oxlint-disable-line @typescript-eslint/no-unused-vars
        borderWidth, // oxlint-disable-line @typescript-eslint/no-unused-vars
        boxShadow, // oxlint-disable-line @typescript-eslint/no-unused-vars
        cursor, // oxlint-disable-line @typescript-eslint/no-unused-vars
        ["&:hover"]: hover, // oxlint-disable-line @typescript-eslint/no-unused-vars
        ...styles
    }) {
        return styles
    },
    // oxlint-disable-next-line @typescript-eslint/no-unused-vars
    placeholder({ color, ...styles }) {
        return styles
    },
    // oxlint-disable-next-line @typescript-eslint/no-unused-vars
    input({ color, ...styles }) {
        return styles
    },
    // oxlint-disable-next-line @typescript-eslint/no-unused-vars
    indicatorsContainer({ color, ...styles }) {
        return styles
    },
    // oxlint-disable-next-line @typescript-eslint/no-unused-vars
    loadingIndicator({ color, ...styles }) {
        return styles
    },
    // oxlint-disable-next-line @typescript-eslint/no-unused-vars
    clearIndicator({ color, [":hover"]: hover, ...styles }) {
        return styles
    },
    // oxlint-disable-next-line @typescript-eslint/no-unused-vars
    indicatorSeparator({ backgroundColor, ...styles }) {
        return styles
    },
    // oxlint-disable-next-line @typescript-eslint/no-unused-vars
    dropdownIndicator({ color, [":hover"]: hover, ...styles }) {
        return styles
    },
    // oxlint-disable-next-line @typescript-eslint/no-unused-vars
    singleValue({ color, ...styles }) {
        return styles
    },
}

export const CLASSNAMES: ClassNamesConfig<SelectOption> = {
    control(props) {
        return cx("border-0 outline-0 shadow-none bg-yellow-200/50", props.selectProps.isLoading && "cursor-wait")
    },
    placeholder(props) {
        return props.selectProps.isLoading ? "text-select-text-disabled" : "text-select-text"
    },
    input() {
        return "text-select-text"
    },
    indicatorsContainer(props) {
        return props.selectProps.isLoading ? "text-select-draw-disabled" : "text-select-draw"
    },
    indicatorSeparator(props) {
        return props.selectProps.isLoading ? "bg-select-draw-disabled" : "bg-select-draw"
    },
    clearIndicator(props) {
        return props.selectProps.isLoading ? "" : "hover:text-select-draw-hover"
    },
    dropdownIndicator(props) {
        return props.selectProps.isLoading ? "" : "hover:text-select-draw-hover"
    },
}

export function LoadingSelectInput() {
    return (
        <Select
            isLoading
            isSearchable={false}
            menuIsOpen={false}
            placeholder={<Loader inline />}
            classNames={CLASSNAMES}
            styles={STYLES}
        />
    )
}

export function SelectInputLine({ title, ...props }: Props & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <SelectInput {...props} />
        </FormLine>
    )
}

export default function SelectInput(props: Props) {
    const { value, onChange } = useInputState(props.id)
    const options = useMemo(
        () =>
            props.options.map((option) => ({
                value: option.id,
                label: option.title,
            })),
        [props.options],
    )
    const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value])

    return (
        <Select<SelectOption, false>
            name={props.id}
            placeholder=""
            isClearable={props.optional}
            classNames={CLASSNAMES}
            styles={STYLES}
            options={options}
            autoFocus={props.autofocus}
            value={selectedOption}
            onChange={(option) => {
                onChange(option === null ? "" : option.value)
            }}
        />
    )
}
