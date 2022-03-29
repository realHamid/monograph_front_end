import React , {Component} from "react";

class Test extends Component{

    render() {
        return(
            <>
                <div className="page-header">
                    <h3 className="page-title bfont"> صفحه برای امتحان است </h3>
                </div>

                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"><span className="bfont"> ثبت مشتری </span></h4>
                                <p className="card-description"><span className="bfont"> مشخصات مشتری را وارد نموده ثبت نماید ! </span>
                                </p>
                                <form className="forms-sample">
                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2"
                                               className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control"
                                                   id="exampleInputUsername2" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputEmail2"
                                               className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-7">
                                            <input type="email" className="form-control" id="exampleInputEmail2"
                                                   placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputMobile"
                                               className="col-sm-2 col-form-label">Mobile</label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control" id="exampleInputMobile"
                                                   placeholder="Mobile number" />
                                        </div>
                                    </div>
                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputPassword2"
                                               className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-7">
                                            <input type="password" className="form-control"
                                                   id="exampleInputPassword2" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputConfirmPassword2"
                                               className="col-sm-2 col-form-label">Re Password</label>
                                        <div className="col-sm-7">
                                            <input type="password" className="form-control"
                                                   id="exampleInputConfirmPassword2" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-check form-check-flat form-check-primary">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" /> Remember me <i className="input-helper"></i> </label>
                                    </div>
                                    <button type="submit" className="btn btn-gradient-primary mr-2">Submit
                                    </button>
                                    <button className="btn btn-light">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"><span
                                    className="bfont"> آخرین موارد ثبت شده  </span></h4>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th><span className="bfont"> نام  </span></th>
                                            <th> موضوع</th>
                                            <th> الحالة</th>
                                            <th> اخر تحديث</th>
                                            <th> تتبع الهوية</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <img src="../../../public/assets/images/faces/face1.jpg" className="ml-2"
                                                     alt="image" /> ديفيد جراي
                                            </td>
                                            <td> لم يتم تلقي الصندوق</td>
                                            <td>
                                                <label className="badge badge-gradient-success">منجز</label>
                                            </td>
                                            <td> 5 ديسمبر ، 2017</td>
                                            <td> WD-12345</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="../../../public/assets/images/faces/face2.jpg" className="ml-2"
                                                     alt="image" /> ستيلا جونسون
                                            </td>
                                            <td> ارتفاع وقت التحميل</td>
                                            <td>
                                                <label
                                                    className="badge badge-gradient-warning">التقدم</label>
                                            </td>
                                            <td> 12 ديسمبر ، 2017</td>
                                            <td> WD-12346</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="../../../public/assets/images/faces/face3.jpg" className="ml-2"
                                                     alt="image" />مارينا ميشيل
                                            </td>
                                            <td> موقع لأسفل لمدة أسبوع واحد</td>
                                            <td>
                                                <label className="badge badge-gradient-info">في
                                                    الانتظار</label>
                                            </td>
                                            <td> 16 ديسمبر ، 2017</td>
                                            <td> WD-12347</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="../../../public/assets/images/faces/face4.jpg" className="ml-2"
                                                     alt="image" /> فلان الفلاني
                                            </td>
                                            <td> فقدان السيطرة على الخادم</td>
                                            <td>
                                                <label className="badge badge-gradient-danger">مرفوض</label>
                                            </td>
                                            <td> 3 ديسمبر ، 2017</td>
                                            <td> WD-12348</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Test;