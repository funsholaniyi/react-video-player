import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";

class MainContainer extends React.Component {

    render() {
        return (
            <div className="inner-container">
                <h5 className={'col'}><strong>Recommended</strong></h5>
                <MDBContainer  style={{marginTop: "2em"}}>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard style={{width: "auto", boxShadow: 'none'}}>
                                <MDBCardImage className="img-fluid"
                                              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                <MDBCardBody style={{backgroundColor: '#F2F1F8', padding: '1rem 0'}}>
                                    <MDBCardTitle className={'video-title'}>Card title</MDBCardTitle>
                                    <MDBCardText className={'video-desc'}>
                                        Channel Name<br/>
                                        20 Views . 1 Day Ago
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard style={{width: "auto", boxShadow: 'none'}}>
                                <MDBCardImage className="img-fluid"
                                              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                <MDBCardBody style={{backgroundColor: '#F2F1F8', padding: '1rem 0'}}>
                                    <MDBCardTitle className={'video-title'}>Card title</MDBCardTitle>
                                    <MDBCardText className={'video-desc'}>
                                        Channel Name<br/>
                                        20 Views . 1 Day Ago
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard style={{width: "auto", boxShadow: 'none'}}>
                                <MDBCardImage className="img-fluid"
                                              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                <MDBCardBody style={{backgroundColor: '#F2F1F8', padding: '1rem 0'}}>
                                    <MDBCardTitle className={'video-title'}>Card title</MDBCardTitle>
                                    <MDBCardText className={'video-desc'}>
                                        Channel Name<br/>
                                        20 Views . 1 Day Ago
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard style={{width: "auto", boxShadow: 'none'}}>
                                <MDBCardImage className="img-fluid"
                                              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves/>
                                <MDBCardBody style={{backgroundColor: '#F2F1F8', padding: '1rem 0'}}>
                                    <MDBCardTitle className={'video-title'}>Card title</MDBCardTitle>
                                    <MDBCardText className={'video-desc'}>
                                        Channel Name<br/>
                                        20 Views . 1 Day Ago
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default MainContainer;