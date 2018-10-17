import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
//components
import Footer from './Footer'
import Header from './Header'


class Wrapper extends Component {

  componentDidMount() {
    //scroll to top on all pages
    window.scrollTo(0,0)
  }

  render() {
      return(
        <div style={{flexDirection: 'column'}} >
          <Header />
            {Children.only(this.props.children)}
          <Footer />
        </div>
     );
  }
}

Wrapper.contextTypes = {
  drizzle: PropTypes.object
}

export default Wrapper
