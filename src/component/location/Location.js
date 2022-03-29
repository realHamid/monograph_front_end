import React , {Component} from "react";


class Location extends Component{

    render() {
        return(
            <>
                <div className="page-header">
                    <h3 className="page-title bfont">  ثبت موقعیت   </h3>
                </div>

                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"><span className="bfont"> ثبت اطلاعات  </span></h4>
                                <p className="card-description"><span className="bfont"> مشخصات موقعیت  وارد نموده ثبت نماید ! </span>
                                </p>
                                <form className="forms-sample">


                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  تصویر موقعیت    <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="file" className="form-control form-control-sm  bfont"  placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  نام  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control form-control-sm " id="exampleInputMobile"  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >   ولایت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select className="form-control form-control-sm  bfont">
                                                <option value=""> یک ولایت را انتخاب نماید  </option>
                                                <option> هرات  </option>
                                                <option> کابل </option>
                                                <option> مزار </option>
                                                <option> قندهار </option>
                                                <option> فراه </option>
                                                <option> بادغیس  </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >   ولسوالی   <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select className="form-control form-control-sm  bfont">
                                                <option value=""> یک ولایت را انتخاب نماید  </option>
                                                <option> هرات  </option>
                                                <option> کابل </option>
                                                <option> مزار </option>
                                                <option> قندهار </option>
                                                <option> فراه </option>
                                                <option> بادغیس  </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >   دسته بندی   <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select className="form-control form-control-sm  bfont">
                                                <option value=""> یک ولایت را انتخاب نماید  </option>
                                                <option> هرات  </option>
                                                <option> کابل </option>
                                                <option> مزار </option>
                                                <option> قندهار </option>
                                                <option> فراه </option>
                                                <option> بادغیس  </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  امکانات   <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select className="form-control form-control-sm  bfont">
                                                <option value=""> یک ولایت را انتخاب نماید  </option>
                                                <option> هرات  </option>
                                                <option> کابل </option>
                                                <option> مزار </option>
                                                <option> قندهار </option>
                                                <option> فراه </option>
                                                <option> بادغیس  </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" > گالری عکس    <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="file" className="form-control form-control-sm  bfont"  placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  آدرس    </label>
                                        <div className="col-sm-7">
                                            <textarea className="form-control form-control-sm  bfont" style={{height: '120px'}} ></textarea>
                                        </div>
                                    </div>

                                    <br />

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  تاریخ ثبت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="date" className="form-control form-control-sm  bfont"  placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  توضیحات   </label>
                                        <div className="col-sm-7">
                                            <textarea className="form-control form-control-sm  bfont" style={{height: '120px'}} ></textarea>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="form-group row">
                                        <div style={{marginRight: '22%'}} >
                                            <button type="submit" className="btn btn-gradient-primary submit-btn bfont"> ثبت و جدید</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-light bfont"> انصراف  </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default Location;