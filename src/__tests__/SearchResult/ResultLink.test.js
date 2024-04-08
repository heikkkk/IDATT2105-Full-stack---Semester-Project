import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ResultLink from '@/components/SearchResult/ResultLink.vue'

describe('SearchResultLink', () => {

  test('should render correctly', () => {
    const wrapper = mount(ResultLink, {
      propsData: {
        id: 1,
        title: 'testTitle',
        author: 'testAuthor',
        category: 'testCategory',
      }
    })

    const authorP = wrapper.findAll('p')[0]
    const categoryP = wrapper.findAll('p')[1]

    expect(authorP.text()).toEqual('Author: testAuthor')
    expect(categoryP.text()).toEqual('Category: testCategory')
  })
})