import React , {Component} from "react";
import {Link} from "react-router-dom";

class ListFechar extends Component{

    render() {
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
                                        <tr>
                                            <td> <span className="bfont"> 1  </span> </td>
                                            <td> <span className="bfont">  داشتن هتل     </span> </td>
                                            <td> <span className="bfont">  2021/01/02   </span> </td>
                                            <td> <span className="bfont">  این مکان داری هتل ۵ ستاره میباشد  </span> </td>
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
                                        <tr>
                                            <td> <span className="bfont"> 1  </span> </td>
                                            <td> <span className="bfont">  داشتن هتل     </span> </td>
                                            <td> <span className="bfont">  2021/01/02   </span> </td>
                                            <td> <span className="bfont">  این مکان داری هتل ۵ ستاره میباشد  </span> </td>
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
                                        <tr>
                                            <td> <span className="bfont"> 1  </span> </td>
                                            <td> <span className="bfont">  داشتن هتل     </span> </td>
                                            <td> <span className="bfont">  2021/01/02   </span> </td>
                                            <td> <span className="bfont">  این مکان داری هتل ۵ ستاره میباشد  </span> </td>
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
                                        <tr>
                                            <td> <span className="bfont"> 1  </span> </td>
                                            <td> <span className="bfont">  داشتن هتل     </span> </td>
                                            <td> <span className="bfont">  2021/01/02   </span> </td>
                                            <td> <span className="bfont">  این مکان داری هتل ۵ ستاره میباشد  </span> </td>
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
                                        <tr>
                                            <td> <span className="bfont"> 1  </span> </td>
                                            <td> <span className="bfont">  داشتن هتل     </span> </td>
                                            <td> <span className="bfont">  2021/01/02   </span> </td>
                                            <td> <span className="bfont">  این مکان داری هتل ۵ ستاره میباشد  </span> </td>
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
                                        <tr>
                                            <td> <span className="bfont"> 1  </span> </td>
                                            <td> <span className="bfont">  داشتن هتل     </span> </td>
                                            <td> <span className="bfont">  2021/01/02   </span> </td>
                                            <td> <span className="bfont">  این مکان داری هتل ۵ ستاره میباشد  </span> </td>
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
                                        <tr>
                                            <td> <span className="bfont"> 1  </span> </td>
                                            <td> <span className="bfont">  داشتن هتل     </span> </td>
                                            <td> <span className="bfont">  2021/01/02   </span> </td>
                                            <td> <span className="bfont">  این مکان داری هتل ۵ ستاره میباشد  </span> </td>
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
                                        <tr>
                                            <td> <span className="bfont"> 1  </span> </td>
                                            <td> <span className="bfont">  داشتن هتل     </span> </td>
                                            <td> <span className="bfont">  2021/01/02   </span> </td>
                                            <td> <span className="bfont">  این مکان داری هتل ۵ ستاره میباشد  </span> </td>
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
        );
    }
}

export default ListFechar;