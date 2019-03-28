import React from 'react';
import {MDBBtn, MDBCollapse, MDBFormInline, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler} from 'mdbreact';

class FixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const bgBlue = {backgroundColor: '#011936'};
        return (
            <div>
                <header>
                    <MDBNavbar style={bgBlue} dark expand="md" scrolling fixed="top">
                        <MDBNavbarBrand href="/">
                            <strong>BlueTube</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.onClick}/>
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav right>
                                <MDBFormInline className="md-form m-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                           aria-label="Search"/>
                                    <MDBBtn outline color="white" size="sm" type="submit" className="mr-auto">
                                        Search
                                    </MDBBtn>
                                </MDBFormInline>
                            </MDBNavbarNav>

                        </MDBCollapse>
                    </MDBNavbar>
                </header>
            </div>
        );
    }
}

export default FixedNavbar;