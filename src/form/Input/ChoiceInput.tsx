import { ReactNode } from "react"

import { SelectableButton } from "../../components/index.js"
import FormLine from "../FormLine.js"
import { useInputState } from "../index.js"

import type { InputLineProps, InputProps } from "./index.js"

export interface Option {
    readonly id: string
    readonly title: string
    readonly icon: ReactNode
}

interface Props extends InputProps {
    readonly options: Option[]
}

export function ChoiceInputLine({ title, ...props }: Props & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <ChoiceInput {...props} />
        </FormLine>
    )
}

export default function ChoiceInput(props: Props) {
    const { value, onChange } = useInputState(props.id)

    return (
        <>
            <div className="flex flex-wrap gap-2 px-2 py-1 items-center justify-center">
                {props.options.map((option) => (
                    <SelectableButton
                        key={option.id}
                        className="grow"
                        icon={option.icon}
                        selected={value === option.id}
                        onClick={() => {
                            onChange(value === option.id ? "" : option.id)
                        }}
                    >
                        {option.title}
                    </SelectableButton>
                ))}
            </div>
            <input name={props.id} type="hidden" required={!props.optional} value={value} />
        </>
    )
}
