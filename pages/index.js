import React from 'react'
import { Jumbotron, Row, Col, Well, Label, ListGroup, ListGroupItem, Form, FormGroup, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap'
import Page from './../components/layouts/page.js'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      url: 'https://demo.actionherojs.com',
      state: 'connecting',
      room: 'defaultRoom',
      id: null,
      messages: [],
      error: null,
      message: ''
    }
  }

  componentDidMount () {
    // (this comes from the server, loaded via index.html)
    // we need to load this after the component is mounted to the server doesn't try to render this isomorphically
    let client = new ActionheroClient({url: this.state.url}) // eslint-disable-line
    this.setState({client}, () => this.connect())
  }

  connect () {
    const client = this.state.client

    client.on('connected', () => { this.setState({state: 'connected', id: client.id}) })
    client.on('disconnected', () => { this.setState({state: 'disconnected'}) })
    client.on('error', (error) => { this.setState({error}) })
    client.on('reconnect', () => { this.setState({state: 'reconnect'}) })
    client.on('reconnecting', () => { this.setState({state: 'reconnecting'}) })

    client.on('alert', function (message) { console.warn(message) })
    client.on('api', function (message) { console.warn(message) })

    client.on('welcome', (message) => { this.appendMessage(message) })
    client.on('say', (message) => { this.appendMessage(message) })

    client.connect((error, details) => {
      if (error) { return this.setState({error}) }
      client.roomAdd(this.state.room)
    })
  }

  appendMessage (message) {
    let messages = this.state.messages
    messages.unshift(message)
    this.setState({messages})
  }

  formatMessage (message) {
    let key = new Date().getTime() + Math.random()

    if (message.welcome) {
      return <ListGroupItem key={key}><strong>{`*** ${message.welcome} ***`}</strong></ListGroupItem>
    } else {
      return (
        <ListGroupItem key={key} header={
          <div>
            <span style={{color: this.getColor(message.from)}}>{message.from}</span> @ {this.formatTime(message.sentAt)}
          </div>
        }>{message.message}</ListGroupItem>
      )
    }
  }

  formatTime (timestamp) {
    return new Date(timestamp).toLocaleTimeString()
  }

  getColor (id) {
    if (!id) { return 'black' }

    let hash = 0
    for (var i = 0; i < id.length; i++) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color =
      ((hash >> 24) & 0xFF).toString(16) +
      ((hash >> 16) & 0xFF).toString(16) +
      ((hash >> 8) & 0xFF).toString(16) +
      (i & 0xFF).toString(16)

    return `#${color.substring(0, 6)}`
  }

  handleChange (event) {
    let change = {}
    change[event.target.id] = event.target.value
    this.setState(change)
  }

  submit (event) {
    event.preventDefault()
    const client = this.state.client
    client.say(this.state.room, this.state.message)
    this.setState({message: ''})
  }

  render () {
    return (
      <Page error={this.state.error}>
        <br />
        <Jumbotron>
          <Row>
            <Col md={4}>
              <img src='//demo.actionherojs.com/public/logo/actionhero.png' style={{maxWidth: 200}} />
            </Col>
            <Col md={8}>
              <h1>ActionHero</h1>
              <h2>Testing React + Next.js + Chat</h2>
              <p>Learn more at <a href='https://github.com/actionhero/actionhero-react-next-chat'>https://github.com/actionhero/actionhero-react-next-chat</a></p>
            </Col>
          </Row>
        </Jumbotron>

        <Row>
          <Col md={4}>
            <Well>
              <p>
                <Label>State: {this.state.state}</Label>
              </p>
              <p>
                <Label bsStyle='primary'>
                  You are <span style={{color: this.getColor(this.state.id)}}>{this.state.id}</span>
                </Label>
              </p>

              <Form onSubmit={this.submit.bind(this)}>
                <FormGroup controlId='message'>
                  <InputGroup>
                    <FormControl type='text' onChange={this.handleChange.bind(this)} value={this.state.message} placeholder='message' />
                    <InputGroup.Addon>
                      <Glyphicon glyph='send' />
                    </InputGroup.Addon>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <Button type='submit'>
                    Send
                  </Button>
                </FormGroup>
              </Form>
            </Well>
          </Col>

          <Col md={8}>
            <h2>Messages</h2>
            <ListGroup>
              {
                this.state.messages.map((message) => {
                  return this.formatMessage(message)
                })
              }
            </ListGroup>
          </Col>
        </Row>
      </Page>
    )
  }
}
