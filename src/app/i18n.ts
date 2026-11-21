import i18n from "i18next"
import HttpApi from "i18next-http-backend"

export async function initI18n(defaultLanguage: string): Promise<void> {
    // oxlint-disable-next-line import/no-named-as-default-member
    await i18n.use(HttpApi).init({
        debug: true,
        fallbackLng: defaultLanguage,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/translations/{{lng}}.json",
        },
    })
}
