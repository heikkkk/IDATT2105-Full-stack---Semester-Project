import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Carousel from '@/components/Discover/Carousel.vue'
import CarouselImage from '@/components/Discover/CarouselImage.vue'

describe('Carousel', () => {
  test('renders correctly with no quizzes', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        title: 'testTitle'
      }
    })
    expect(wrapper.find('h1').text()).toEqual('testTitle')
    expect(wrapper.props().content.length).toBe(0)
    expect(wrapper.find('h2').text()).toEqual("No quiz's available!")
  })

  test('renders correctly with quizzes', () => {
    const propQuizzes = [
      {
        "categoryId": 1,
        "quizId": 0,
        "quizTitle": "Math",
      },
      {
        "categoryId": 2,
        "quizId": 0,
        "quizTitle": "Science",
      },
      {
        "categoryId": 3,
        "quizId": 0,
        "quizTitle": "History",
      },
      {
        "categoryId": 4,
        "quizId": 0,
        "quizTitle": "Sport",
      },
      {
        "categoryId": 5,
        "quizId": 0,
        "quizTitle": "Food",
      },
    ]

    const wrapper = mount(Carousel, {
      propsData: {
        title: 'testTitle',
        content: propQuizzes,
      }
    })

    const firstCarouselImage = wrapper.findComponent(CarouselImage)
    const title = firstCarouselImage.props().title
    expect(wrapper.find('h1').text()).toEqual('testTitle')
    expect(title).toBe('Math')
  })
})
