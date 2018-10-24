import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
//images
import AllImg from '../../img/tripleFashion.png'

class DonationCompleteModal extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }

    //bind functions
  }


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
                <div className="modal-title" style={{color: '#FCFCFA'}}>You&#39;re All Set!</div>

                <div className="modal-text" style={{color: '#FCFCFA'}}>Your donation choice has been submitted! We will send out a confirmation email and keep you notified as to when the final donation is made to the organization&#39;s of your choice.</div>

                <div className="modal-text" style={{color: '#FCFCFA'}}>In the meantime, learn how you can redeem your own Luxarity token for your charitable efforts.</div>

                <div style={{alignItems: 'center', justifyContent: 'center'}}>
                  <button className="p-btn-light-medium">View Progress</button>
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
