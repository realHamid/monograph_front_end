import { BrowserRouter, Route } from 'react-router-dom';

import React , { Component } from "react";
import Head from "./Head";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Login from "../Login";

import Router from "../Router";

class Main extends Component {

    state = {
        isChange : true
    }

    logout = () => {
        localStorage.removeItem('user-data');
        this.setState((oldState,props)  => {
            return {
                ...oldState,
                isChange : false
            }
        });
    }

    mainContent = () => (
        <>
            <div className="container-scroller">

                <Head logout={this.logout} />

                <div className="container-fluid page-body-wrapper">

                    <Sidebar />

                    <div className="main-panel">

                        <div className="content-wrapper">

                            <Router />

                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )

    render() {

        let auth = localStorage.getItem('user-data');
        auth = JSON.parse(auth);

        return (
            <BrowserRouter>
                {
                    ( auth && auth['api_token']  )
                        ?
                        this.mainContent()
                        :
                        <Login />
                }
            </BrowserRouter>
        )
    }
}

export  default Main;