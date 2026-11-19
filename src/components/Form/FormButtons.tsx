import { t } from "i18next"
import type { ReactNode } from "react"
import { FaAnglesLeft, FaFloppyDisk } from "react-icons/fa6"

import { ActionButton, BackButton, ButtonContainer, SubmitButton, type ButtonType } from "../Button"

interface Props {
    submitting: boolean

    submitTitle: string
    submitIcon?: ReactNode
    submitButtonType?: ButtonType

    cancelTitle?: string // Default to `t("global.cancel")`
    cancelIcon?: ReactNode
    cancelButtonType?: ButtonType
}

export type CancelOptions = { onCancel: () => void } | { cancelTarget: string }

export type ButtonsProps = Props & CancelOptions

export default function FormButtons(props: ButtonsProps) {
    return (
        <ButtonContainer align="right">
            <SubmitButton
                submitting={props.submitting}
                type={props.submitButtonType}
                icon={props.submitIcon ?? <FaFloppyDisk />}
            >
                {props.submitTitle}
            </SubmitButton>
            {isCancelAction(props) ? (
                <ActionButton
                    onClick={props.onCancel}
                    type={props.cancelButtonType}
                    icon={props.cancelIcon ?? <FaAnglesLeft />}
                >
                    {props.cancelTitle ?? t("global.cancel")}
                </ActionButton>
            ) : (
                <BackButton type={props.cancelButtonType} target={props.cancelTarget}>
                    {props.cancelTitle ?? t("global.cancel")}
                </BackButton>
            )}
        </ButtonContainer>
    )
}

function isCancelAction(options: CancelOptions): options is { onCancel(): void } {
    return (options as { onCancel(): void }).onCancel !== undefined
}
