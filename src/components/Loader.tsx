import { t } from "i18next"

interface Props {
    inline?: boolean // Default to `false`
}

export default function Loader(props: Props) {
    return props.inline ? <InlineLoader /> : <BlockLoader />
}

export function BlockLoader() {
    return (
        <div className="relative h-full flex justify-center items-center text-4xl">
            <svg className="inline size-80 animate-spin ease" viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="11.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                />
                <path className="opacity-75" fill="currentColor" d="M1 12a11 11 0 0111-11v-1a12 12 0 00-12 12h1z" />
            </svg>
            <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                {t("global.loading")}
            </div>
        </div>
    )
}

export function SectionLoader() {
    return (
        <div className="relative h-full flex justify-center items-center text-lg py-1">
            <svg className="inline size-6 animate-spin ease" viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="m 4 12 a 8 8 0 0 1 9 -8 v -4 a 12 12 0 0 0 -13 12 h 4 z"
                />
            </svg>
            <div className="ml-3">{t("global.loading")}</div>
        </div>
    )
}

export function InlineLoader() {
    return t("global.loading")
}
