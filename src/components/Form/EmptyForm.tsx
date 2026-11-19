import FormButtons, { type ButtonsProps } from "./FormButtons"

interface Props {
    onSubmit: () => void
}

export default function EmptyForm({ onSubmit, ...buttonProps }: Props & ButtonsProps) {
    return (
        <form
            className="flex flex-col gap-8"
            onSubmit={(event) => {
                event.preventDefault()
                onSubmit()
            }}
        >
            <FormButtons {...buttonProps} />
        </form>
    )
}
