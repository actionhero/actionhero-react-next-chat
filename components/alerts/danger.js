import React from 'react'
import Link from 'next/link'
import { Row, Col, Alert } from 'react-bootstrap'

export default class extends React.Component {
  render () {
    let message = this.props.message
    if (!message) { return null }

    // special formatter for needing to log in
    if (message === 'Please log in to continue') {
      message = <Link href='/sign-in'><a>{message}</a></Link>
    }

    return (
      <Row>
        <Col md={12}>
          <Alert bsStyle='danger'> {message} </Alert>
        </Col>
      </Row>
    )
  }
}
