import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import Footer from './../../components/footer.js'

describe('Footer', () => {
  it('renders the page', () => {
    let page = TestUtils.renderIntoDocument(<Footer />)
    let body = ReactDOM.findDOMNode(page).textContent

    expect(body).toContain('ActionHero')
    expect(body).toContain((new Date()).getFullYear())
  })
})
