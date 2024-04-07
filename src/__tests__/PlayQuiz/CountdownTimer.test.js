import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CountdownTimer from '@/components/PlayQuiz/CountdownTimer.vue'

describe('CountdownTimer', () => {
  test('should display correct time passed in prop', () => {
    const wrapper = mount(CountdownTimer, {
      propsData: {
        timerValue: 50
      }
    })

    const timerText = wrapper.find('label').text()
    expect(timerText).toEqual('50')
  })

  test('should display not display incorrect default time', () => {
    const wrapper = mount(CountdownTimer, {})

    const timerText = wrapper.find('label').text()
    expect(timerText).not.toEqual('50')
  })
})