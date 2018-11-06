import React from 'react'
import Button from '../Button'
import { shallow } from 'enzyme'

describe('Button Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Button> hi </Button>)
  })

  it('outputs with default settings', () => {
    let thing = wrapper.html()
    expect(thing).toEqual('<button class="btn primary" type="button"> hi </button>')
  })
})