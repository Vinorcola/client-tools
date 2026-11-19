import { t } from "i18next"
import { FaAnglesLeft, FaTriangleExclamation } from "react-icons/fa6"
import { useNavigate } from "react-router"

import { ActionButton, ButtonContainer } from "./Button"
import Notification from "./Notification"
import Page from "./Page"

export default function PageNotFound() {
    const navigate = useNavigate()

    return (
        <Page title={t("global.pageNotFound")} icon={<FaTriangleExclamation />}>
            <Notification type="error" title={t("global.pageNotFound")} icon={<FaTriangleExclamation />}>
                {t("global.pageNotFound.message")}
            </Notification>

            <ButtonContainer align="center">
                <ActionButton
                    icon={<FaAnglesLeft />}
                    onClick={() => {
                        // oxlint-disable-next-line typescript/no-floating-promises
                        navigate(-1)
                    }}
                >
                    {t("global.back")}
                </ActionButton>
            </ButtonContainer>
        </Page>
    )
}
