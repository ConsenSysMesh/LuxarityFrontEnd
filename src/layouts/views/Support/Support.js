import React, { Component } from 'react'
//css components
import { Col, Row } from 'react-grid-system'
//components
import Wrapper from '../../components/wrapper/Wrapper'
import SupportACauseSection from '../../components/sections/SupportACauseSection'
import ProjectCardComplex from '../../components/projectcard/ProjectCardComplex'
//tempData
import testData from './tempData/data.json'
//images
import GreenImg from '../../img/Green.png'
import TanImg from '../../img/Tan.png'
import BlueImg from '../../img/Blue.png'

class Support extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }

    //bind functions
    this.mapSections = this.mapSections.bind(this)
  }

  mapSections(data) {
    const gridItems = data.map((datum, index) => {
      //orientation
      let orientation = 'right';
      if (index%2 !== 0) {
        orientation = "left"
      }
      //select image
      let image;
      let size;
      if (index === 0) {
        image = GreenImg;
        size = '45% 100%';
      } else if (index === 1) {
        image = TanImg;
        size = '45% 100%';
      } else if (index === 2) {
        image = BlueImg;
        size = '50% 100%';
      }
      return (
        <ProjectCardComplex
          key={index}
          cardOrientation={orientation}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.charityName}
          cardSummary={datum.charitySummary}
          cardPledged={datum.charityPledge}
          charityImage={image}
          backgroundSizeImg={size}
          cardGoal={datum.charityGoal} />
      );
    });

    return (
      <div>{gridItems}</div>
    )
  }

  render() {
    return (
      <Wrapper>
        <div>
          <SupportACauseSection />
          {this.mapSections(testData)}
        </div>
      </Wrapper>
    )
  }
}

export default Support
