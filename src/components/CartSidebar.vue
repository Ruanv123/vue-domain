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
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Button>
        <ShoppingCart />
      </Button>
    </SheetTrigger>
    <SheetContent class="h-full">
      <SheetHeader>
        <SheetTitle>Cart</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </SheetDescription>
      </SheetHeader>

      <!-- products map -->

      <div>
        <div class="flex justify-between mt-auto">
          <h2>Subtotal</h2>
          <p>$42,000</p>
        </div>
        <div class="grid gap-3">
          <Button variant="outline" class="w-full">View Cart</Button>
          <Button class="w-full">Checkout</Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
