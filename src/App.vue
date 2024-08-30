<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CartSidebar from './components/CartSidebar.vue'
import { Toaster } from './components/ui/sonner'
</script>

<template>
  <Toaster rich-colors close-button />
  <header class="flex bg-zinc-700">
    <nav class="max-w-[1200px] mx-auto w-full flex items-center justify-between p-5">
      <div class="text-white font-bold gap-3 flex items-center">
        <RouterLink to="/" class="hover:opacity-65">Home</RouterLink>
        <RouterLink to="/about" class="hover:opacity-65">About</RouterLink>
        <RouterLink to="/create-product" class="hover:opacity-65">Create Product</RouterLink>
      </div>

      <CartSidebar />
    </nav>
  </header>

  <div class="max-w-[1200px] mx-auto mt-5 w-full px-5">
    <RouterView />
  </div>
</template>
