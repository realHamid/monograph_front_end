import React , {Component} from "react";

import logo_name from '../assets/img/namelogo.svg';
import face1 from  '../assets/faces/face1.jpg';
import {Link} from "react-router-dom";


class Head extends Component{


    logout = () => {
        this.props.logout();
    }


    render() {
        return(
            <>
                <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">

                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <a className="navbar-brand brand-logo"
                           href="/"><img
                            src={logo_name}
                            alt="logo"/></a>
                    </div>

                    <div className="navbar-menu-wrapper d-flex align-items-stretch">

                        <button className="navbar-toggler navbar-toggler align-self-center" type="button"
                                data-toggle="minimize">
                            <span className="mdi mdi-menu"></span>
                        </button>

                        <div className="search-field d-none d-md-block bfont">
                            <form className="d-flex align-items-center h-100" action="#">
                                <div className="input-group bfont">
                                    <div className="input-group-prepend bg-transparent">
                                        <i className="input-group-text border-0 mdi mdi-magnify"></i>
                                    </div>
                                    <input type="text" className="form-control bfont" placeholder=" جستجو نماید  " />
                                </div>
                            </form>
                        </div>

                        <ul className="navbar-nav navbar-nav-right pr-0">
                            <li className="nav-item nav-profile dropdown">
                                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#"
                                   data-toggle="dropdown" aria-expanded="false">
                                    <div className="nav-profile-img">
                                        <img src={face1} alt="image" />
                                        <span className="availability-status online"></span>
                                    </div>
                                    <div className="nav-profile-text">
                                        <p className="mb-1 text-black bfont"> احمد کریمی </p>
                                    </div>
                                </a>
                                <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                                    <Link className="dropdown-item" to='/profile'>
                                        <i className="mdi mdi-cached mr-2 text-success bfont"></i> تظمیات </Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item"  onClick={this.logout} >
                                        <i className="mdi mdi-logout mr-2 text-primary bfont"></i> خروج </a>
                                </div>
                            </li>
                        </ul>

                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                                type="button" data-toggle="offcanvas">
                            <span className="mdi mdi-menu"></span>
                        </button>
                        
                    </div>
                </nav>

            </>
        )
    }
}


export default Head;