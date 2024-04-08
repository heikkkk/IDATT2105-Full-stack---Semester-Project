import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import SearchResult from '@/components/SearchResult/SearchResult.vue'
import ResultLink from '@/components/SearchResult/ResultLink.vue'

describe('SearchResult', () => {

  test('should contain no ResultLink when there are no results', () => {
    const wrapper = mount(SearchResult)

    expect(wrapper.findComponent(ResultLink).exists()).toBe(false)

  })
})