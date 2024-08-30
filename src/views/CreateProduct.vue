<script setup lang="ts">
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(
  z.object({
    name: z.string(),
    description: z.optional(z.string()),
    price: z.number(),
    stock: z.number(),
    category: z.optional(z.string())
  })
)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  console.log('form submited', values)
})
</script>

<template>
  <main>
    <h1>Create Product</h1>

    <div class="border rounded-md p-5 w-full mt-10">
      <form @submit="onSubmit" class="space-y-5">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Product name <span></span></FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <!-- <FormDescription> This is your public display name. </FormDescription> -->
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Product description</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <!-- <FormDescription> This is your public display name. </FormDescription> -->
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Product description</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <!-- <FormDescription> This is your public display name. </FormDescription> -->
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit"> Submit </Button>
      </form>
    </div>
  </main>
</template>
