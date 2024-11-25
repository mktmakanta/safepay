export type Payment = {
  name: string
  balance: number
}
export type CartItems = {
  product?: string | 'products'
  quantity?: number
  id?: string
}[]

export interface Category {
  id: string
  title: string
  media?: string | CartItems
  parent?: string
  breadcrumbs?: {
    doc?: string | Category
    url?: string
    label?: string
    id?: string
  }[]
  updatedAt: string
  createdAt: string
}
