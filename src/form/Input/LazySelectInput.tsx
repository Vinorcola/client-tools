import { Suspense, use } from "react"

import FormLine from "../FormLine.js"
import SelectInput, { LoadingSelectInput, type Option } from "./SelectInput.js"

import type { InputLineProps, InputProps } from "./index.js"

interface Props extends InputProps {
    readonly options: Promise<Option[]>
}

export function LazySelectInputLine({ title, ...props }: Props & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <LazySelectInput {...props} />
        </FormLine>
    )
}

export default function LazySelectInput(props: Props) {
    return (
        <Suspense fallback={<LoadingSelectInput />}>
            <LoadedSelectInput {...props} />
        </Suspense>
    )
}

function LoadedSelectInput(props: Props) {
    const options = use(props.options)

    return <SelectInput {...props} options={options} />
}
