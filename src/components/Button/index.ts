import cx from "@vinorcola/utils/classNames"

export { default as ButtonContainer } from "./Container"

export { default as ActionButton } from "./ActionButton"
export { default as BackButton } from "./BackButton"
export { default as LinkButton } from "./LinkButton"
export { default as SubmitButton } from "./SubmitButton"

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
