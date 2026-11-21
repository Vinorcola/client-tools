import { t } from "i18next"
import { ReactNode } from "react"

import { SelectableButton } from "../Button/index.js"
import { useInputState } from "../Form/index.js"

import type { InputProps } from "./index.js"

export interface Option {
    readonly id: string
    readonly translationKey: string
    readonly icon: ReactNode
}

interface Props extends InputProps {
    readonly options: Option[]
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
                        {t(option.translationKey)}
                    </SelectableButton>
                ))}
            </div>
            <input name={props.id} type="hidden" required={!props.optional} value={value} />
        </>
    )
}
