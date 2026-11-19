import cx from "@vinorcola/utils/classNames"
import type { ReactNode } from "react"
import type { ClassNamesConfig, StylesConfig } from "react-select"

export interface Option {
    value: string
    label: ReactNode
}

export const STYLES: StylesConfig<Option> = {
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

export const CLASSNAMES: ClassNamesConfig<Option> = {
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
