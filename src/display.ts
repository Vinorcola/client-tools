export function displayDate(input: Date): string {
    return input.toLocaleDateString()
}

export type Currency = string
const priceFormatter: Record<Currency, Intl.NumberFormat> = {}
export function displayPrice(priceInCents: number, currency: Currency = "EUR"): string {
    if (!(currency in priceFormatter)) {
        priceFormatter[currency] = new Intl.NumberFormat(undefined, { style: "currency", currency })
    }

    return priceFormatter[currency].format(priceInCents / 100)
}
