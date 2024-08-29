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
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Cart</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </SheetDescription>
      </SheetHeader>

      <!-- products map -->
    </SheetContent>
  </Sheet>
</template>
