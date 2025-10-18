import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ExternalLink from '../../app/components/ExternalLink.vue'

describe('externalLink', () => {
  it('renders link with correct text and href', () => {
    const wrapper = mount(ExternalLink, {
      props: {
        text: 'PrimeVue',
        href: 'https://primevue.org/setup/',
      },
    })
    const a = wrapper.find('a')
    expect(a.exists()).toBe(true)
    expect(a.text()).toBe('PrimeVue')
    expect(a.attributes('href')).toBe('https://primevue.org/setup/')
    expect(a.attributes('target')).toBe('_blank')
  })

  it('renders default props', () => {
    const wrapper = mount(ExternalLink)
    const a = wrapper.find('a')
    expect(a.text()).toBe('Nuxt')
    expect(a.attributes('href')).toBe('https://nuxt.com')
  })
})
