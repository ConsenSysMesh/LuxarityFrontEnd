import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { Row, Col } from 'react-grid-system';
//components
import Wrapper from '../../components/wrapper/Wrapper'
import ProjectCardComplex from '../../components/projectcard/ProjectCardComplex'
import ProjectCardSimple from '../../components/projectcard/ProjectCardSimple'

class Test extends Component {
  render() {
    return (
      <Wrapper>
        <Col style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F2F3'}}>
          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <ProjectCardComplex
              key={1}
              cardOrientation={'Right'}
              cardCategory={'RESPONSIBLE'}
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
          <br/>
          <br/>
          <br/>

        </Col>
      </Wrapper>
    )
  }
}

export default Test
