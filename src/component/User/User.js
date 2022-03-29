import React , {Component} from "react";
import face1 from  '../assets/faces/face1.jpg';
import ListUser from "./ListUser";


class User extends Component{

    render() {
        return(
            <>
                <div className="page-header">
                    <h3 className="page-title bfont">  ثبت کاربر  </h3>
                </div>

                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"><span className="bfont"> ثبت اطلاعات  </span></h4>
                                <p className="card-description"><span className="bfont"> مشخصات کاربر  را وارد نموده ثبت   نماید ! </span>
                                </p>
                                <form className="forms-sample">

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >   عکس  <span className="text-danger">*</span>  </label>
                                        <div className="col-sm-7">
                                            <input type='file' className="form-control form-control-sm  bfont"  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  نام  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control form-control-sm " id="exampleInputMobile"  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputPassword2"
                                               className="col-sm-2 col-form-label"> موبایل  <span className="text-danger">*</span>    </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control form-control-sm " id="exampleInputPassword2"  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputPassword2"
                                               className="col-sm-2 col-form-label"> ایمیل    </label>
                                        <div className="col-sm-7">
                                            <input type="email" className="form-control form-control-sm " id="exampleInputPassword2"  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputPassword2"
                                               className="col-sm-2 col-form-label"> تاریخ ثبت <span className="text-danger">*</span>      </label>
                                        <div className="col-sm-7">
                                            <input type="date" className="form-control form-control-sm " id="exampleInputPassword2"  />
                                        </div>
                                    </div>


                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputPassword2"
                                               className="col-sm-2 col-form-label"> نام کاربری <span className="text-danger">*</span>    </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control form-control-sm " id="exampleInputPassword2"  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputPassword2"
                                               className="col-sm-2 col-form-label">  رمز عبور <span className="text-danger">*</span>      </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control form-control-sm " id="exampleInputPassword2"  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputPassword2"
                                               className="col-sm-2 col-form-label"> تکرار رمز عبور  <span className="text-danger">*</span>      </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control form-control-sm " id="exampleInputPassword2"  />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div style={{marginRight: '22%'}} >
                                            <button type="submit" className="btn btn-gradient-primary submit-btn bfont"> ثبت و جدید
                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-light bfont"> انصراف  </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <ListUser />

            </>
        )
    }
}

export default User;