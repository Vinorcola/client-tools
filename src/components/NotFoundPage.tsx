import { t } from "i18next"
import { FaAnglesLeft, FaTriangleExclamation } from "react-icons/fa6"
import { useNavigate } from "react-router"

import { ActionButton, ButtonContainer } from "./Button/index.js"
import Notification from "./Notification.js"
import Page from "./Page/index.js"

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
