import React, { Component } from 'react'


class ProjectCard1 extends Component {

  render() {
    return(
      <section>
        <div className="p-card1">
          <div className="p-card-box1">
            <div className="card-content">
              <h5 className="card-sub-title">Responsible</h5>
              <h3 className="card-title">Hkrita Research</h3>

              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et gravida enim. Nullam ac nibh mi. Donec aliquam ligula non volutpat malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et gravida enim. Nullam ac nibh mi. Donec aliquam ligula non volutpat malesuada.
              </p>

              <div className="bp3-progress-bar bp3-intent-success bp3-no-stripes">
                <div className="bp3-progress-meter" style={{width: '75%'}}></div>
              </div>

              <p className="pledge">$50,320</p>
              <p className="pledge-sub">pledged of $200,000 goal</p>
            </div>

            <button className="p-btn-dark"> Suppport this project </button>
            <button className="p-btn-light"> Project details </button>
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectCard1
