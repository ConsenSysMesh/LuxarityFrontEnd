import React, { Component } from 'react'
import { Link } from 'react-router-dom' //v4
//css components
import { Row } from 'react-grid-system'
import { Redirect, withRouter } from 'react-router-dom'; //v4
//components
import Wrapper from '../../components/wrapper/WrapperContainer'
import LuxarityIsMoreSection from '../../components/sections/LuxarityIsMoreSection'
import ProjectSkinnyCard from '../../components/projectcard/ProjectSkinnyCard'
//tempData
import testData from '../Support/tempData/data.json'
//images
import GreenImg from '../../img/Green.png'
import TanImg from '../../img/Tan.png'
import BlueImg from '../../img/Blue.png'

class Progress extends Component {
  constructor(props, context) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    //not as important to save to state so might change in the future 9/23/18
    if (prevProps.getOrderByRedemError.length === 0 && this.props.getOrderByRedemError.length > 0) {
      this.setState({ messageModal: true })
    }
  }

  mapSections(data) {
    const gridItems = data.map((datum, index) => {

      //select image
      let image;
      let size;
      if (index === 0) {
        image = GreenImg;
        size = '55%';
      } else if (index === 1) {
        image = TanImg;
        size = '55%';
      } else if (index === 2) {
        image = BlueImg;
        size = '55%';
      }

      return (
        <ProjectSkinnyCard
          key={index}
          cardCategory={datum.charityCategory}
          cardOrgName={datum.charityName}
          cardPledged={datum.charityPledge}
          charityImage={image}
          charityImageSize={size}
          cardGoal={datum.charityGoal} />
      );
    });

    return (
      <Row style={{backgroundColor: 'rgb(241, 242, 243)', padding: '0 5%'}}>{gridItems}</Row>
    )
  }

  render() {

    return (
        <Wrapper>
          <div>
            <div className="p-landing">
              <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: '25px 50px 25px 50px', position: 'absolute', top: '65%'}}>
                <p style={{textTransform: 'uppercase', display: 'flex', flexDirection: 'column', justifyContent: 'center', letterSpacing: 4, fontSize: 38, paddingRight: 25, color: 'rgb(88, 90, 86)'}}>Luxarity is more than a store</p>
                <button className="p-btn-dark">
                  <Link to={{pathname: '/' }} style={{ textDecoration: 'none', color: 'white'}}>Learn more</Link>
                </button>
              </div>
            </div>
            <div>
              <div style={{fontSize: '50px', textAlign: 'center', padding: '100px 0'}}>Three incredible causes to support</div>

              {this.mapSections(testData)}

            </div>

            <LuxarityIsMoreSection />
          </div>
        </Wrapper>
    )
  }
}

export default withRouter(Progress)
