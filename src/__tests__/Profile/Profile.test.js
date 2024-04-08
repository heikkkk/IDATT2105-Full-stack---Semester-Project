import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Profile from '@/components/Profile/Profile.vue'
import Carousel from '@/components/Discover/Carousel.vue'

describe('Profile', () => {

  test('should render Profile component', () => {
    const wrapper = mount(Profile)

    expect(wrapper.findComponent(Carousel).exists()).toBe(true)
  })
})