import React , {Component} from "react";
import {Link} from "react-router-dom";
import axios from "../axios/axios";

class ListCategory extends Component{

    count = 1;

    deleteRow = id => {

        let data = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token,
            'id'    : id
        };

        axios.post('/category/deleted',data).then((response) => {
            this.props.getList();
        }).catch((err) => {
            console.log(err);
        });

    }


    render() {
        this.count = 1;
        return (
            <>
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
                                            <th><span className="bfont"> نام  </span></th>
                                            <th><span className="bfont"> تاریخ   </span></th>
                                            <th><span className="bfont"> توضیحات  </span></th>
                                            <th><span className="bfont"> عملیات   </span></th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {
                                            this.props.list.map( row => (
                                                <tr key={row.id}>
                                                    <td> <span className="bfont"> { this.count++ }  </span> </td>
                                                    <td> <span className="bfont">  { row.name }    </span> </td>
                                                    <td> <span className="bfont">  { row.date }  </span> </td>
                                                    <td> <span className="bfont">  { row.note } </span> </td>
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
                                                                <a className="dropdown-item" onClick={() => this.deleteRow(row.id)} >
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

                <div className="modal fade" id="exampleModal-4" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title bfont " id="ModalLabel"> احمد کریمی   </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <table className="table table-striped model ">
                                    <tbody>
                                    <tr>
                                        <td className="td_c"> قد</td>
                                        <td className="td_c"> ۱۲۰</td>
                                    </tr>
                                    <tr>
                                        <td className="td_c"> شانه</td>
                                        <td className="td_c" > ۱۲۰</td>
                                    </tr>
                                    <tr>
                                        <td className="td_c"> بغل</td>
                                        <td className="td_c" > ۱۲۰</td>
                                    </tr>
                                    <tr>
                                        <td className="td_c"> قد شلوار</td>
                                        <td className="td_c" > ۱۲۰</td>
                                    </tr>
                                    <tr>
                                        <td className="td_c"> آستین</td>
                                        <td className="td_c" > ۱۲۰</td>
                                    </tr>
                                    <tr>
                                        <td className="td_c"> یخن</td>
                                        <td className="td_c" >۱۲۰</td>
                                    </tr>
                                    <tr>
                                        <td className="td_c"> بردامن</td>
                                        <td className="td_c" >۱۲۰</td>
                                    </tr>
                                    <tr>
                                        <td className="td_c"> دم پارچه</td>
                                        <td className="td_c" >۱۲۰</td>
                                    </tr>

                                    </tbody>
                                </table>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-dismiss="modal"> <span className="bfont"> بستن  </span> </button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default ListCategory;