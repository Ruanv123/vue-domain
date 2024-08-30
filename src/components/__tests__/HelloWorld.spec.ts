import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CartSidebar from '../CartSidebar.vue'
import { beforeEach } from 'node:test'
import { getActivePinia } from 'pinia'

describe('HelloWorld', () => {
  beforeEach(() => {
    getActivePinia()
  })
  
  it('renders properly', async () => {
    const sheetTrigger = '[data-testid=sheet-trigger]'
    const wrapper = mount(CartSidebar)

    await wrapper.find(sheetTrigger).trigger('click')
    expect(wrapper.find(sheetTrigger).exists()).toBe(true)
  })
})
