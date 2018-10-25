import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system';
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import ProjectCardComplex from '../../components/projectcard/ProjectCardComplex'
import ProjectCardSimple from '../../components/projectcard/ProjectCardSimple'
import EnterPinSection from '../../components/sections/EnterPinSection'
import SupportModal from '../../components/projectcard/SupportModal'

class Test extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      supportOpen: false,
    }

    //bind functions
    this.handleClose = this.handleClose.bind(this)
    this.handleDonate = this.handleDonate.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleClose() {
    this.setState({ supportOpen: false })
  }

  handleOpen() {
    this.setState({ supportOpen: true })
  }

  handleDonate() {

  }

  render() {
    return (
      <Wrapper>
        <Col style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F2F3'}}>
          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <ProjectCardComplex
              key={1}
              backgroundSizeImg={"50% 100%"}
              cardOrientation={'Right'}
              cardCategory={'RESPONSIBLE'}
              donationAmount={200}
              cardOrgName={"HKRITA RESEARCH"}
              cardSummary={"The Hong Kong Research Institute of Textiles and Apparel (HKRITA) was established in April 2006. To enhance Hong Kong's cutting edge, we have the funding support from Innovation and Technology Commission, HKSAR Government. HKRITA is also supported by institutes, companies and associations in the textile and clothing industry in Hong Kong, mainland China and other countries."}
              cardPledged={50320}
              charityImage={"https://amuse-images.vice.com/wp_upload/2016/09/vince-staples-crop.jpg"}
              cardGoal={200000} />
          </Row>

          <br/>

          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <ProjectCardComplex
              key={1}
              cardOrientation={'Left'}
              backgroundSizeImg={"50% 100%"}
              donationAmount={200}
              cardCategory={'RESPONSIBLE'}
              cardOrgName={"HKRITA RESEARCH"}
              cardSummary={"The Hong Kong Research Institute of Textiles and Apparel (HKRITA) was established in April 2006. To enhance Hong Kong's cutting edge, we have the funding support from Innovation and Technology Commission, HKSAR Government. HKRITA is also supported by institutes, companies and associations in the textile and clothing industry in Hong Kong, mainland China and other countries."}
              cardPledged={50320}
              charityImage={"https://amuse-images.vice.com/wp_upload/2016/09/vince-staples-crop.jpg"}
              cardGoal={200000} />
          </Row>

          <br/>

          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <ProjectCardSimple
              key={1}
              cardOrientation={'Right'}
              cardCategory={'RESPONSIBLE'}
              cardOrgName={"HKRITA RESEARCH"}
              cardPledged={50320}
              charityImage={'http://modellist-id.com/wp-content/uploads/image/blog/adinda5.jpg'}
              cardGoal={200000} />
          </Row>

          <br/>

          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <EnterPinSection />
          </Row>

          <br/>

          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <button className="p-btn-dark" style={{display: "inline-block"}} onClick={this.handleOpen}>Support Project</button>
            <SupportModal
              open={this.state.supportOpen}
              onDonate={this.handleDonate}
              handleClose={this.handleClose}
              overlayColor={'#CFDBD2'}
              donationAmount={200}
              donationImage={'http://modellist-id.com/wp-content/uploads/image/blog/adinda5.jpg'}
              cardCategory={'RESPONSIBLE'}
              cardOrgName={"HKRITA RESEARCH"}
              cardPledged={50320}
              cardGoal={200000} />
          </Row>

          <br/>
          <br/>
          <br/>

        </Col>
      </Wrapper>
    )
  }
}

export default Test
