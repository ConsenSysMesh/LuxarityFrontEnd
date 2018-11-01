//import react
import React from 'react';
//components
import { Row } from 'react-grid-system';
//import Inputbox from '../inputbox/Inputbox'

export default class Footer extends React.Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      email: '',
    }

    //bind functions
    this.updateEmail = this.updateEmail.bind(this)
  }

  updateEmail(event) {
    this.setState({ email: event.target.value })
    this.props.setEmail(event.target.value)
  }

  render() {

    return (
      <div>
        <Row style={{backgroundColor: 'white', minHeight: 60, borderTop: '1px solid #F1F2F3', alignItems: 'center', justifyContent: 'center', paddingLeft: '15%', paddingRight: '15%', margin: 0}}>
          <div style={{fontSize: 20, color: '#111112', textAlign: 'center', display: 'inline-block', paddingRight: 20}}>Keep up with our latest updates</div>
          <div className="inputbox" >
            <input type="text" placeholder="Email" name="email" onChange={this.updateEmail} value={this.state.email}/>
            <button type="submit"> &rarr; </button>
          </div>
        </Row>
        <Row style={{backgroundColor: '#F1F2F3', minHeight: 300, padding: 0, margin: 0}}>
          <span></span>
        </Row>
      </div>
    );
  }
}
