export interface Product{
    productId?: number | null | undefined,
    name?: string | null | undefined,
    sku?: string | null | undefined,
    category?: number | null | undefined,
    basePrice?: number | null | undefined,
    mrp?: number | null | undefined,
    description?: string | null | undefined,
    currency?: number | null | undefined,
    manufacturedDate?: Date | null | undefined,
    expireDate?: Date | null | undefined
}