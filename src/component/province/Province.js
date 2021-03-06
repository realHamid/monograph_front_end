import React , {Component} from "react";
import ListProvince from "./ListProvince";
import axios from "../axios/axios";

class Province extends Component{

    state = {
        list : []
    }


    getList = () => {
        let auth = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token
        };

        axios.post('/province/list',auth).then((response) => {

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
        this.getList();
    }

    submitForm = e => {

        e.preventDefault();

        let form = document.getElementById('province_from');
        let formData = new FormData(form);

        formData.append('token' , 'b58ac01c6c7a9fb5ffd1a5d9c7d68955');
        formData.append('api_token' , JSON.parse(localStorage.getItem('user-data')).api_token);

        axios.post('/province',formData).then((response) => {

            document.getElementById('name').value = '';
            document.getElementById('date').value = '';
            document.getElementById('note').value = '';
            this.getList();

        }).catch((err) => {
            console.log(err);
        });

    }


    render() {
        return(
            <>
                <div className="page-header">
                    <h3 className="page-title bfont">  ثبت ولایت  </h3>
                </div>

                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"><span className="bfont"> ثبت اطلاعات  </span></h4>
                                <p className="card-description"><span className="bfont"> مشخصات ولایت وارد نموده ثبت نماید ! </span>
                                </p>
                                <form className="forms-sample" id="province_from" onSubmit={this.submitForm}>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  تصویر ولایت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="file" className="form-control form-control-sm  bfont"  placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="name" className="col-sm-2 col-form-label bfont" >  نام ولایت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="text" required name="name" id="name" className="form-control form-control-sm  bfont"  placeholder=" هرات   " />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="date" className="col-sm-2 col-form-label bfont" >  تاریخ ثبت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="date" required name="date" id="date" className="form-control form-control-sm  bfont"  placeholder="" />
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

                <ListProvince list={this.state.list} getList={this.getList} />

            </>
        )
    }
}

export default Province;