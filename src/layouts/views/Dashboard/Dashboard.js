import React, { Component } from 'react'
//project cards
import ProjectCardComplex from '../../components/projectcard/ProjectCardComplex'
//sections
import LuxarityIsMoreSection from '../../components/sections/LuxarityIsMoreSection'
import SupportACauseSection from '../../components/sections/SupportACauseSection'
//components
import Wrapper from '../../components/wrapper/Wrapper'
//tempData
import charityData from './tempData/data.json';

class Dashboard extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }

    //bind functions
    this.mapProjectCards = this.mapProjectCards.bind(this)
  }

  mapProjectCards(data) {
    const gridItems = data.map((datum, index) => {
      let orientation = 'right';
      if (index%2 !== 0) {
        orientation = "left"
      }
      return (
        <ProjectCardComplex
          key={index}
          cardOrientation={orientation}
          cardCategory={datum.charityCategory.toUpperCase()}
          cardOrgName={datum.charityName.toUpperCase()}
          cardSummary={datum.charitySummary}
          cardPledged={datum.charityPledge}
          charityImage={datum.charityImage}
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
          {this.mapProjectCards(charityData)}
          <LuxarityIsMoreSection />
        </div>
      </Wrapper>
    )
  }
}

export default Dashboard
