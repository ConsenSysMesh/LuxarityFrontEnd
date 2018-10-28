import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'


class MessageModal extends Component {

  getMessage(noAllocation, orderError) {
    if (noAllocation) {
      return (
        <div className="card-subsection-text" style={{fontSize: 14, color: '#595A55'}}>Unfortunately, you have no more proceeds to donate. If you would like to continue to give to the causes Luxarity is sponsoring, please feel free to donate directly in the top right corner of the site! Thank you!</div>
      )
    } else if (orderError) {
      return (
        <div className="card-subsection-text" style={{fontSize: 14, color: '#595A55'}}>Hmmm..This order seems not to exist, or has been processed incorrectly. Please reach out to the Luxarity team so that we may assist and get you on the right track!</div>
      )
    }

    return (
      <div className="card-subsection-text" style={{fontSize: 14, color: '#595A55'}}>{this.props.cardMessage}</div>
    )
  }

  render() {
    return(

      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        PaperProps={{
          style: {
            backgroundColor: this.props.overlayColor,
            boxShadow: 'none',
          },
        }} >
        <DialogContent style={{padding: 0, maxHeight: 800, margin: 0}}>
          <Row style={{backgroundColor: '#F1F2F3'}}>
            <Col md={5} style={{width: '100%', padding: 0, margin: 0}} >
              <img alt="LUXARITY" className="boxed-image" style={{width: '100%', height: '100%'}} src={this.props.messageImage} />
            </Col>
            <Col md={7} style={{margin: 0, padding: 0}}>
              <div>
                <Row style={{background: 'white', height: 190, padding: 0, margin: 0}}> <span></span></Row>
                <Row style={{padding: 0, margin: 0, backgroundColor: 'white'}}>
                  <div className="card-content" style={{width: '100%'}}>
                    <p className="card-title">{this.props.cardTitle}</p>
                  </div>
                </Row>
              </div>
              <div style={{backgroundColor: '#cfdbd2', justifyContent: 'center', alignItems: 'center'}}>
                <div className="card-subsection">
                  <div className="card-subsection-title"><strong>{this.props.cardSubtitle}</strong></div>
                  {this.getMessage(this.props.noAllocationleft, this.props.orderIncomplete)}
                </div>
                <div className="card-subsection" style={{display: 'flex', justifyContent: 'flex-end', height: '100%', margin: 0}}>
                  <button
                    style={{paddingBottom: 10, marginBottom: 0}}
                    className="p-btn-light-medium" onClick={this.props.handleClose}>Close</button>
                </div>
              </div>
            </Col>
          </Row>
        </DialogContent>
      </Dialog>
    )
  }
}

export default MessageModal
