import React , {Component} from "react";
import axios from "../axios/axios";



class Location extends Component{

    state = {
        provinces   : [],
        districts   : [],
        categories  : [],
        features    : [],
    }

    getProvince     = () => {

        let auth = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token
        };

        axios.post('/location/provinces',auth).then((response) => {

            this.setState((oldState,props)  => {
                return {
                    ...oldState,
                    provinces : response.data
                }
            });
        }).catch((err) => {
            console.log(err);
        });

    }
    getCategories   = () => {

        let auth = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token
        };

        axios.post('/location/category',auth).then((response) => {

            this.setState((oldState,props)  => {
                return {
                    ...oldState,
                    categories : response.data
                }
            });
        }).catch((err) => {
            console.log(err);
        })
    }
    districts       = () => {

        let province_id = document.getElementById('province_id').value;
        let auth = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token,
            'province_id' : province_id
        };

        axios.post('/location/districts',auth).then((response) => {

            alert(response.data);
            this.setState((oldState,props)  => {
                return {
                    ...oldState,
                    districts : response.data
                }
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    getFeature      = () => {
        let auth = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token
        };

        axios.post('/location/feature',auth).then((response) => {

            this.setState((oldState,props)  => {
                return {
                    ...oldState,
                    features : response.data
                }
            });
        }).catch((err) => {
            console.log(err);
        });

    }

    componentDidMount() {
        this.getProvince();
        this.getCategories();
        this.getFeature();
    }

    submitForm = e => {

        e.preventDefault();

        let form = document.getElementById('location_form');
        let formData = new FormData(form);

        formData.append('token' , 'b58ac01c6c7a9fb5ffd1a5d9c7d68955');
        formData.append('api_token' , JSON.parse(localStorage.getItem('user-data')).api_token);

        axios.post('/location',formData).then((response) => {

            document.getElementById('name').value = '';
            document.getElementById('address').value = '';
            document.getElementById('date').value = '';
            document.getElementById('note').value = '';
            this.getProvince();
            this.getCategories();
            this.getFeature();

        }).catch((err) => {
            console.log(err);
        });

    }


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
                                <form className="forms-sample" onSubmit={this.submitForm} id="location_form">


                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  تصویر موقعیت    <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="file" className="form-control form-control-sm  bfont"  placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="name" className="col-sm-2 col-form-label bfont" >  نام  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="text" name="name" className="form-control form-control-sm " id="name"  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="province_id" className="col-sm-2 col-form-label bfont" >   ولایت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select name="province_id" onChange={() => this.districts()} id="province_id" className="form-control form-control-sm  bfont">
                                                <option value=""> یک ولایت را انتخاب نماید  </option>
                                                {
                                                    this.state.provinces.map( row => (
                                                        <option value={row.id}> { row.name } </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="district_id" className="col-sm-2 col-form-label bfont" >   ولسوالی   <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select id="district_id" name="district_id" className="form-control form-control-sm  bfont">
                                                <option value=""> یک ولایت را انتخاب نماید  </option>
                                                {
                                                    this.state.districts.map( row => (
                                                        <option value={row.id}> { row.name } </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="category_id"   className="col-sm-2 col-form-label bfont" >   دسته بندی   <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select id="category_id" name="category_id" className="form-control form-control-sm  bfont">
                                                <option value=""> یک ولایت را انتخاب نماید  </option>
                                                {
                                                    this.state.categories.map( row => (
                                                        <option value={row.id}> { row.name } </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="feature" className="col-sm-2 col-form-label bfont" >  امکانات   <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select name="feature[]" id="feature" multiple="multiple" className="form-control form-control-sm  bfont js-example-basic-single">
                                                {
                                                    this.state.features.map( row => (
                                                        <option value={row.id}> { row.name } </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <br />

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" > گالری عکس    <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="file" className="form-control form-control-sm  bfont"  placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="address" className="col-sm-2 col-form-label bfont" >  آدرس    </label>
                                        <div className="col-sm-7">
                                            <textarea id="address" name="address" className="form-control form-control-sm  bfont" style={{height: '120px'}} ></textarea>
                                        </div>
                                    </div>

                                    <br />

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="date" className="col-sm-2 col-form-label bfont" >  تاریخ ثبت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="date" name="date" id="date" className="form-control form-control-sm  bfont"  placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="note" className="col-sm-2 col-form-label bfont" >  توضیحات   </label>
                                        <div className="col-sm-7">
                                            <textarea id="note" name="note" className="form-control form-control-sm  bfont" style={{height: '120px'}} ></textarea>
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