export function hydrateBoolean(input: string): boolean {
    return input === "true"
}

export function hydrateDate(input: string): Date {
    return new Date(`${input}T12:00:00Z`)
}

export function dehydrateDate(input: Date): string {
    return input.toISOString().split("T")[0]
}

export function hydrateDateTime(input: string): Date {
    return new Date(input)
}

export function dehydrateDateTime(input: Date): string {
    return input.toISOString()
}

export function hydrateInteger(input: string): number {
    return Number.parseInt(input, 10)
}

export function dehydrateInteger(input: number): string {
    return `${Math.round(input)}`
}

export function hydrateDecimal(input: string): number {
    return Number.parseFloat(input)
}

export function dehydrateDecimal(input: number): string {
    return `${input}`
}

/**
 * Hydrate price in cents.
 */
export function hydratePrice(input: string): number {
    return Math.round(Number.parseFloat(input) * 100)
}

/**
 * Dehydrate cents into price.
 */
export function dehydratePrice(input: number): string {
    return (input / 100).toFixed(2)
}

export function hydrateOptionalString(input: string): string | null {
    return input === "" ? null : input
}

/**
 * Generic hydrator for optional values.
 *
 * Example:
 * - `hydrateOptional(hydrateDate, input)`
 * - `hydrateOptional(hydrateInteger, input)`
 */
export function hydrateOptional<T>(hydrator: (input: string) => T, input: string | null): T | null {
    return input === "" || input === null ? null : hydrator(input)
}
