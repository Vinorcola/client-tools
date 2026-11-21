import { Suspense, use } from "react"

import { LoadingSelectInput, type Option } from "./SelectInput.js"

import { InputProps, MultiSelectInput } from "./index.js"

interface Props extends InputProps {
    readonly options: Promise<Option[]>
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
