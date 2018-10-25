import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
//components
import Footer from './Footer'
import Header from './Header'


class Wrapper extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      email: '',
    }

    //bind functions
    this.setEmail = this.setEmail.bind(this)
  }

  setEmail(email) {
    this.setState(email: email)
  }

  componentDidMount() {
    //scroll to top on all pages
    window.scrollTo(0,0)
  }

  render() {
      return(
        <div style={{flexDirection: 'column'}} >
          <Header />
            {Children.only(this.props.children)}
          <Footer setEmail={this.setEmail} />
        </div>
     );
  }
}

Wrapper.contextTypes = {
  drizzle: PropTypes.object
}

export default Wrapper
