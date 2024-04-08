import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Discover from '@/components/Discover/Discover.vue'
import Carousel from '@/components/Discover/Carousel.vue'

describe('Discover', () => {

  test('should render carousels correctly', () => {
    const wrapper = mount(Discover)

   let categoryQuizzes = wrapper.vm.categoryQuizzes
    const userQuizCarousel = wrapper.findAllComponents(Carousel)[1]
    expect(userQuizCarousel.props().content).toEqual(categoryQuizzes)
  })


})
