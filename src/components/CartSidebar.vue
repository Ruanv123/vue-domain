<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '@/stores/counter'

const cartStore = useCartStore()

console.log('cartStore', cartStore.getCart)
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Button>
        <ShoppingCart />
      </Button>
    </SheetTrigger>
    <SheetContent class="h-screen">
      <div class="h-full flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            You have {{ cartStore.getCart.length }} items in your cart
          </SheetDescription>
        </SheetHeader>

        <!-- products map -->
        <div class="mt-10 grid gap-3">
          <p>Products</p>
          <div
            v-for="product in cartStore.getCart"
            :key="product.id"
            class="border-y flex items-start justify-between"
          >
            <div class="grid gap-1">
              <p>{{ product.name }}</p>
              <p>{{ product.description }}</p>
            </div>
            <p>{{ product.price }}</p>
          </div>
        </div>

        <div class="mt-auto">
          <div class="flex justify-between mt-auto">
            <h2>Subtotal</h2>
            <p>
              {{
                cartStore.getCart
                  .reduce((a, b) => a + b.price, 0)
                  .toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })
              }}
            </p>
          </div>
          <div class="grid gap-3">
            <Button variant="outline" class="w-full">View Cart</Button>
            <Button class="w-full">Checkout</Button>
            <Button class="w-full" variant="destructive" @click="cartStore.clearCart"
              >Limpar carrinho</Button
            >
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
