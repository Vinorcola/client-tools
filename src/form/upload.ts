import { awaitAll, fromList } from "@vinorcola/utils/object"
import { useCallback, useState } from "react"

import { postHttp } from "../http.js"
import { FileInputValue, FileValue } from "./Input/index.js"

import { FormState } from "./index.js"

export type UploadedFiles<Keys extends string> = Record<Keys, string | null>

export interface FileUpload<Keys extends string> {
    readonly isUploading: boolean
    readonly uploadFiles: (formState: FormState<Keys>, formData: FormData) => Promise<UploadedFiles<Keys>>
}

export function useFileUpload<Keys extends string>(attributes: Keys[]): FileUpload<Keys> {
    const [isUploading, setUploading] = useState(false)

    return {
        isUploading,
        uploadFiles: useCallback(
            async (formState, formData) => {
                setUploading(true)

                try {
                    return uploadFiles(attributes, formState, formData)
                } finally {
                    setUploading(false)
                }
            },
            [attributes],
        ),
    }
}

function uploadFiles<Keys extends string>(
    attributes: Keys[],
    formState: FormState<Keys>,
    formData: FormData,
): Promise<UploadedFiles<Keys>> {
    return awaitAll(
        fromList(
            attributes,
            (attribute): Keys => attribute,
            (attribute) =>
                handleFileUpload(formState[attribute] as FileInputValue, formData.get(attribute) as File | null),
        ),
    )
}

/**
 * Handle file upload if necessary and return the file id.
 *
 * If the user set no file (or drop existing file), returns `null`.
 * If the user kept the current file, returns the existing file's id.
 * If the user set or changed the file, uploads the file and returns the temporary file's id.
 */
async function handleFileUpload(formStateValue: FileInputValue, file: File | null): Promise<string | null> {
    if (formStateValue === null) {
        return null
    }
    if ((formStateValue as FileValue).id !== undefined) {
        return (formStateValue as FileValue).id
    }

    const uploadFormData = new FormData()
    uploadFormData.append("file", file!)

    return (await postHttp<{ id: string }>("/file", uploadFormData)).id
}
