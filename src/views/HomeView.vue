<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useCartStore, type Product } from '@/stores/counter'
import { Pencil, ShoppingCart, Trash } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { useProductStore } from '../stores/product'

const cartStore = useCartStore()
const productStore = useProductStore()

const onAddToCart = (data: Product) => {
  cartStore.addToCart(data)
  toast.success('Product added to cart')
}
</script>

<template>
  <main class="w-full">
    <h1 class="text-2xl font-bold">Home</h1>

    <section class="mt-10">
      <div class="border overflow-hidden" v-if="productStore.getProducts.length">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="(product, index) in productStore.getProducts"
              :key="product.id + index"
            >
              <TableCell>{{ product.id }}</TableCell>
              <TableCell>{{ product.name }}</TableCell>
              <TableCell>{{ product.description }}</TableCell>
              <TableCell>{{ product.price }}</TableCell>
              <TableCell v-if="product.id">
                <div class="flex items-center gap-2">
                  <button class="text-red-500" @click="productStore.removeProduct(product.id)">
                    <Trash :size="18" />
                  </button>
                  <button class="text-blue-500">
                    <Pencil :size="18" />
                  </button>
                  <button class="text-green-500" @click="onAddToCart(product)">
                    <ShoppingCart :size="18" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div v-else>
        <h1>No data</h1>
      </div>
    </section>
  </main>
</template>
