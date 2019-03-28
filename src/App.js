import React, {Component} from 'react';
import FixedNavbar from "./components/FixedNavbar";
import {BrowserRouter as Router} from "react-router-dom";
import FixedSidebar from "./components/FixedSidebar";
import {MDBContainer} from 'mdbreact';
import MainContainer from "./components/MainContainer";
import "./main.css"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <FixedNavbar/>
                    <MDBContainer fluid={true} className={'my-container'}>
                        <FixedSidebar/>
                        <MainContainer/>
                    </MDBContainer>
                </div>
            </Router>
        );
    }
}

export default App;
