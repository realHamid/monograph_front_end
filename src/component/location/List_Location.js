import React , {Component} from "react";
import herat_img from "../assets/img/Herat_img.jpg";
import {Link} from "react-router-dom";
import axios from "../axios/axios";


class List_Location extends Component{


    count = 1;

    state  = {
        list : []
    };


    getLocationList = () => {
        let auth = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token
        };

        axios.post('/location/list',auth).then((response) => {

            this.setState((oldState,props)  => {
                return {
                    ...oldState,
                    list : response.data
                }
            });
        }).catch((err) => {
            console.log(err);
        });

    }

    componentDidMount() {
        this.getLocationList();
    }


    render() {

        this.count = 1;

        return(
            <>
                <div className="page-header">
                    <h3 className="page-title bfont">  ثبت موقعیت   </h3>
                </div>

                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"><span
                                    className="bfont"> آخرین موارد ثبت شده  </span></h4>
                                <div className="table-responsive">
                                    <table className="table table-striped  ">
                                        <thead>
                                        <tr>
                                            <th><span className="bfont"> #  </span></th>
                                            <th><span className="bfont"> تصویر   </span></th>
                                            <th><span className="bfont"> نام    </span></th>
                                            <th><span className="bfont"> نام ولایت   </span></th>
                                            <th><span className="bfont"> نام ولسوالی   </span></th>
                                            <th><span className="bfont" > دسته بندی    </span></th>
                                            <th><span className="bfont" > آدرس    </span></th>
                                            <th><span className="bfont"> تاریخ ثبت    </span></th>
                                            <th><span className="bfont"> توضیعات   </span></th>
                                            <th><span className="bfont"> عملیات   </span></th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {
                                            this.state.list.map( row => (
                                                <tr key={row.id}>
                                                    <td> <span className="bfont"> { this.count++ }  </span> </td>
                                                    <td> <img src={herat_img} style={{width: '100px' ,borderRadius: 'unset', height: 'auto'}} /> </td>

                                                    <td> <span className="bfont">   { row.name }   </span> </td>
                                                    <td> <span className="bfont">   { row.province_name }    </span> </td>
                                                    <td> <span className="bfont">   { row.districts_name }    </span> </td>
                                                    <td> <span className="bfont">   { row.categories_name }    </span> </td>
                                                    <td> <span className="bfont">   { row.address }   </span> </td>
                                                    <td> <span className="bfont">   { row.date }   </span> </td>
                                                    <td> <span className="bfont">   { row.note }   </span> </td>
                                                    <td>
                                                        <div className="dropdown">
                                                            <button className="btn btn-primary dropdown-toggle" style={{padding: '5px'}}
                                                                    type="button" id="dropdownMenuOutlineButton1"
                                                                    data-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false"><i className="mdi mdi-settings"></i>
                                                            </button>
                                                            <div className="dropdown-menu"
                                                                 aria-labelledby="dropdownMenuOutlineButton1"
                                                                 x-placement="bottom-start" >
                                                                <Link className="dropdown-item" to='/customer_edit?id=1'>
                                                                    <i className="mdi mdi-tooltip-edit">  </i>
                                                                    <span className="bfont"> ویرایش  </span>
                                                                </Link>
                                                                <div className="dropdown-divider"></div>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="mdi mdi-delete"> </i>
                                                                    <span className="bfont"> حذف  </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                        </tbody>
                                    </table>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default List_Location;