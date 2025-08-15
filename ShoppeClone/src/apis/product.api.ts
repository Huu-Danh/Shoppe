import { type ProductListConfig, type ProductList, type Product } from './../types/product.type'
import type { SuccessResponse } from './../types/ultil.type'
import http from 'src/utils/http'
const URL = 'products'

const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>>(URL, { params })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  }
}

export default productApi
