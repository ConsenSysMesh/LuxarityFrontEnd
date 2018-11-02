import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

//images
import AllImg from '../../img/tripleFashion.png'

class DonationCompleteModal extends Component {

  render() {
    return(

      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose} >
        <DialogContent style={{padding: 0, maxHeight: 800}}>
          <Row style={{minHeight: 400, backgroundColor: '#F1F2F3'}}>
            <Col md={5} style={{width: '100%', overflow: 'hidden', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0}} >
              <img alt="LUXARITY" className="boxed-image" style={{width: '100%', height: '100%'}} src={AllImg} />
            </Col>
            <Col md={7} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#595A55', padding: '8%'}}>
              <div style={{alignItems: 'center', justifyContent: 'center'}}>
                <div className="modal-title" style={{color: '#FCFCFA'}}>You are set!</div>

                <div className="modal-text" style={{color: '#FCFCFA'}}><strong><a href={"https://rinkeby.etherscan.io/tx/" + this.props.transaction} target="_blank" style={{textDecoration: 'none', color: 'white'}}>Thank you for completing the R.A.W. donation journey with us.</a> You have just made a positive impact to help raise awareness about responsible consumption.</strong></div>

                <div className="modal-text" style={{color: '#FCFCFA'}}>We will keep you updated about the project in the coming months.</div>

                <div style={{display: 'flex', justifyContent: 'center'}}>

                  <button className="p-btn-light-medium" >Learn More</button>

                </div>
              </div>
            </Col>
          </Row>
        </DialogContent>
      </Dialog>
    )
  }
}

export default DonationCompleteModal
