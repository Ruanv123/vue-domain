import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface Product {
  id: number
  name: string
  description: string
  price: number
}

export const useProductStore = defineStore('product', () => {
  const product = ref<Product[]>([])

  if (localStorage.getItem('products')) {
    product.value = JSON.parse(localStorage.getItem('products')!)
  }

  const addProduct = (_product: Product) => {
    product.value = [...product.value, _product]
    localStorage.setItem('products', JSON.stringify([...product.value, product]))
  }

  const removeProduct = (_productId: number) => {
    if (localStorage.getItem('products')?.length === 1) {
      localStorage.removeItem('products')
      return
    }

    product.value = product.value.filter((product) => product.id !== _productId)
    localStorage.setItem('products', JSON.stringify([...product.value, product]))
  }

  const getProducts = computed(() => product.value)

  //   const clearCart = () => {
  //     product.value = []
  //   }

  return { product, addProduct, removeProduct, getProducts }
})
