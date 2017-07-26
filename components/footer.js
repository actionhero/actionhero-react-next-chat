import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { date: new Date() }
  }

  render () {
    return (
      <footer>
        <Row>
          <Col md={12}>
            <hr />
            <p>© ActionHero & Delicious Hat, {this.state.date.getFullYear()}</p>
          </Col>
        </Row>
      </footer>
    )
  }
}
