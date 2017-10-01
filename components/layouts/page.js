import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

import Footer from './../footer.js'

import DangerAlert from './../alerts/danger.js'

export default class extends React.Component {
  globalStyle () {
    return {
      fontFamily: 'Open Sans'
    }
  }

  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width' />
          <link rel='stylesheet' type='text/css' href='/static/css/bootstrap.min.css' />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800' rel='stylesheet' />

          <title>ActionHero React Next Chat</title>

          <script src='//demo.actionherojs.com/public/javascript/ActionheroWebsocketClient.min.js' />
        </Head>

        <Grid style={this.globalStyle()}>

          <Row>
            <Col md={12}>
              <DangerAlert message={this.props.error} />
            </Col>
          </Row>

          {
            this.props.children
            ? this.props.children
            : this.props.error
              ? null
              : <em>Loading...</em>
          }

          <Footer />
        </Grid>

      </div>
    )
  }
}
