import cx from "@vinorcola/utils/classNames"
import { useRef } from "react"
import { FaX } from "react-icons/fa6"

import { FileIcon, IconLabel } from "../../components/index.js"
import FormLine from "../FormLine.js"
import { useInputState } from "../index.js"

import type { InputLineProps, InputProps } from "./index.js"

export type FileValue = {
    id: string
    originalName: string
    mimeType: string
    size: number
}
export type LocalFileValue = Omit<FileValue, "id">
export type FileInputValue = FileValue | LocalFileValue | null

export function FileInputLine({ title, ...props }: InputProps & InputLineProps) {
    return (
        <FormLine id={props.id} title={title} optional={props.optional}>
            <FileInput {...props} />
        </FormLine>
    )
}

export default function FileInput(props: InputProps) {
    const ref = useRef<HTMLInputElement>(null)
    const { value, onChange } = useInputState<FileInputValue>(props.id)

    return (
        <>
            {value !== null && (
                <div className="flex flex-wrap min-h-9 p-2 gap-2 bg-yellow-200/50 items-center">
                    <FileCard
                        {...value}
                        onDrop={() => {
                            onChange(null)
                            ref.current!.value = ""
                        }}
                    />
                </div>
            )}
            <input
                ref={ref}
                name={props.id}
                className={cx(
                    value === null
                        ? "file-input h-9 w-full px-2 py-1 border-0 outline-0 shadow-none bg-yellow-200/50"
                        : "hidden",
                )}
                type="file"
                required={!props.optional}
                autoFocus={props.autofocus}
                onChange={(event) => {
                    const file = event.target.files![0] as File | undefined
                    onChange(
                        file === undefined
                            ? null
                            : {
                                  originalName: file.name,
                                  mimeType: file.type,
                                  size: file.size,
                              },
                    )
                }}
            />
        </>
    )
}

interface Props {
    originalName: string
    mimeType: string
    size: number
    onDrop(): void
}

function FileCard(props: Props) {
    return (
        <div className="inline-flex border border-mandalay-400 bg-mandalay-300/75 hover:border-mandalay-500 hover:bg-mandalay-400/75 rounded pl-1 overflow-hidden">
            <IconLabel icon={<FileIcon mimeType={props.mimeType} />}>{props.originalName}</IconLabel>
            <a
                href="#"
                className="inline-flex items-center ml-1 px-0.5 bg-orange-400 hover:bg-red-500 hover:text-white"
                onClick={(event) => {
                    event.preventDefault()
                    props.onDrop()
                }}
            >
                <FaX />
            </a>
        </div>
    )
}
