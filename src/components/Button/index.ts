import cx from "@vinorcola/utils/classNames"

export { default as ButtonContainer } from "./Container.js"

export { default as ActionButton } from "./ActionButton.js"
export { default as BackButton } from "./BackButton.js"
export { default as LinkButton } from "./LinkButton.js"
export { default as SelectableButton } from "./SelectableButton.js"
export { default as SubmitButton } from "./SubmitButton.js"

export type ButtonType =
    | "base"
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "drop"
    | "error"

// oxlint-disable-next-line react-refresh/only-export-components
export function resolveButtonClassName(type: ButtonType, className?: string): string {
    return cx(
        "btn",
        type === "primary" && "btn-primary",
        type === "secondary" && "btn-secondary",
        type === "accent" && "btn-accent",
        type === "neutral" && "btn-neutral",
        type === "info" && "btn-info",
        type === "success" && "btn-success",
        type === "warning" && "btn-warning",
        type === "drop" && "btn-error",
        type === "error" && "btn-error",
        "h-7",
        className,
    )
}
