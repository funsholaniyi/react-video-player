import React from 'react';

class FixedSidebar extends React.Component {
    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const {isOpen} = this.state;
        return (
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <span className="fa fa-home"></span>
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fa fa-fire"></span>
                                    Trending
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fa fa-file"></span>
                                    Subscription
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fa fa-book"></span>
                                    Library
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fa fa-history"></span>
                                    History
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fa fa-clock"></span>
                                    Watch Later
                                </a>
                            </li>
                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Subscriptions</span>
                            <a className="d-flex align-items-center text-muted" href="#">
                                <span className="fa fa-plus-circle"></span>
                            </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fa fa-image"></span>
                                    MEST Africa
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default FixedSidebar;