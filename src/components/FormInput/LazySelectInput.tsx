import { Suspense, use } from "react"

import SelectInput, { LoadingSelectInput, type Option } from "./SelectInput.js"

import { InputProps } from "./index.js"

interface Props extends InputProps {
    readonly options: Promise<Option[]>
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
