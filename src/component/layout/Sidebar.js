import React , {Component} from "react";
import { NavLink,Link } from 'react-router-dom' ;

import face1 from  '../assets/faces/face1.jpg';


class Sidebar extends Component{

    state = {
        menu : {
            items : [
                { title : 'خانه '  ,                icon : 'mdi mdi-home menu-icon' , link : '/' },
                { title : ' ثبت موقعیت  '  ,        icon : 'mdi mdi-map-marker-radius menu-icon ' , link : '/location' },
                { title : ' لیست موقعیت  '  ,       icon : 'mdi mdi mdi-chart-bar menu-icon' , link : '/list_location' },
                { title : '  ثبت دسته بندی  '  ,    icon : 'mdi mdi-border-color menu-icon' , link : '/category' },
                { title : '  ثبت امکانات  '  ,      icon : 'mdi mdi-security menu-icon' , link : '/feature' },
                { title : ' ثبت ولایت  '  ,          icon : 'mdi mdi-cards-variant menu-icon' , link : '/province' },
                { title : ' ثبت ولسوالی  '  ,       icon : 'mdi mdi-image-filter-frames menu-icon' , link : '/district' },
                { title : 'مدریت کاربران  '  ,      icon : 'mdi mdi-code-not-equal-variant menu-icon' , link : '/user' },
            ]
        }
    };

    sidebar_items = menu => {
        return (
            <>
                {
                    menu.items.map((item , index) => (
                        <li className="nav-item" key={index}>
                            <NavLink className="nav-link" to={item.link}   >
                                <span className="menu-title"> { item.title }  </span>
                                <i className={item.icon}></i>
                            </NavLink>
                        </li>
                    ))
                }
            </>
        );
    };

    render() {
        return(
            <>
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">

                        <li className="nav-item nav-profile">
                            <Link to="/" key="-1"  className="nav-link">
                                <div className="nav-profile-image">
                                    <img src={face1} alt="profile" />
                                    <span className="login-status online"></span>
                                </div>
                                <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2"> احمد کریمی </span>
                                    <span className="text-secondary text-small"> مدریر سیستم  </span>
                                </div>
                                <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                            </Link>
                        </li>
                        {
                            this.sidebar_items(this.state.menu)
                        }

                    </ul>
                </nav>
            </>
        );
    }
}

export default Sidebar;