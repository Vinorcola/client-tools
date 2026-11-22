import { Suspense, use } from "react"

import FormLine from "../Form/FormLine.js"
import { LoadingSelectInput, type Option } from "./SelectInput.js"

import { InputLineProps, InputProps, MultiSelectInput } from "./index.js"

interface Props extends InputProps {
    readonly options: Promise<Option[]>
}

export function LazyMultiSelectInputLine({ title, ...props }: Props & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <LazyMultiSelectInput {...props} />
        </FormLine>
    )
}

export default function LazyMultiSelectInput(props: Props) {
    return (
        <Suspense fallback={<LoadingSelectInput />}>
            <LoadedSelectInput {...props} />
        </Suspense>
    )
}

function LoadedSelectInput(props: Props) {
    const options = use(props.options)

    return <MultiSelectInput {...props} options={options} />
}
