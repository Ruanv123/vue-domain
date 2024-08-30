<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useProductStore } from '@/stores/product'
import { toast } from 'vue-sonner'
import { Textarea } from '@/components/ui/textarea'

const formSchema = toTypedSchema(
  z.object({
    name: z.string(),
    description: z.string(),
    price: z.number()
  })
)

const productStore = useProductStore()

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  console.log('form submited', values)
  const product = {
    id: productStore.getProducts.length + 1,
    ...values
  }

  productStore.addProduct(product)
  toast.success('Product created')
})
</script>

<template>
  <main>
    <h1 class="text-2xl font-bold">Create Product</h1>

    <div class="border rounded-md p-5 w-full mt-10">
      <form @submit="onSubmit" class="space-y-5">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Product name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="name..." v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Product description</FormLabel>
            <FormControl>
              <Textarea
                class="resize-none"
                cols="30"
                rows="5"
                placeholder="description..."
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="price">
          <FormItem>
            <FormLabel>Product price</FormLabel>
            <FormControl>
              <Input type="number" step="0.01" placeholder="price..." v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit"> Submit </Button>
      </form>
    </div>
  </main>
</template>
