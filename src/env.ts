export const PROD_ENV =
    typeof process.env.NODE_ENV === "string"
        ? process.env.NODE_ENV === "production"
        : (((import.meta as any).env?.PROD as boolean) ?? false)
