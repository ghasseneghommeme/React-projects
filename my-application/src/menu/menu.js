import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Menu extends Component {
    render() {
        return(


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <a className="navbar-brand" to="/">home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                    </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/add"> Add Goal <span className="sr-only">(current)</span></Link>

                        </li>
                        <li className="nav-item active">
                        <Link className="nav-link" to="/list">List Goal <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>

                </div>


            </nav>





        );

    }


}

export default Menu;