import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface Product {
  id: number
  name: string
  description: string
  price: number
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([])

  const addToCart = (product: any) => {
    cart.value = [...cart.value, product]
  }

  const getCart = computed(() => cart.value)

  const clearCart = () => {
    cart.value = []
  }

  return { cart, addToCart, getCart, clearCart }
})
