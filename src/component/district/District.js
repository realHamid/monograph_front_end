import React , {Component} from "react";
import ListDistrict from "./ListDistrict";
import axios from "../axios/axios";
import ListFechar from "../fechar/ListFechar";

class District extends Component{

    state =  {
        list : [],
        listProvince : []
    };


    getListOfProvince = () => {

        let auth = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token
        };

        axios.post('/district/listProvince',auth).then((response) => {

            this.setState((oldState,props)  => {
                return {
                    ...oldState,
                    listProvince : response.data
                }
            });

        }).catch((err) => {
            console.log(err);
        });

    }

    getList = () => {
        let auth = {
            'token'  : "b58ac01c6c7a9fb5ffd1a5d9c7d68955" ,
            'api_token' : JSON.parse(localStorage.getItem('user-data')).api_token
        };

        axios.post('/district/list',auth).then((response) => {

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
        this.getListOfProvince();
        this.getList();
    }

    submitForm = e => {

        e.preventDefault();

        let form = document.getElementById('district_from');
        let formData = new FormData(form);


        formData.append('token' , 'b58ac01c6c7a9fb5ffd1a5d9c7d68955');
        formData.append('api_token' , JSON.parse(localStorage.getItem('user-data')).api_token);



        axios.post('/district',formData).then((response) => {

            document.getElementById('name').value = '';
            document.getElementById('date').value = '';
            document.getElementById('note').value = '';

            // this.getList();

        }).catch((err) => {
            console.log(err);
        });

    }




    render() {
        return(
            <>
                <div className="page-header">
                    <h3 className="page-title bfont">  ثبت ولسوالی   </h3>
                </div>

                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"><span className="bfont"> ثبت اطلاعات  </span></h4>
                                <p className="card-description"><span className="bfont"> مشخصات ولسوالی وارد نموده ثبت نماید ! </span>
                                </p>
                                <form className="forms-sample" id="district_from" onSubmit={this.submitForm}>


                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="exampleInputUsername2" className="col-sm-2 col-form-label bfont" >  تصویر ولسوالی   <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="file" className="form-control form-control-sm  bfont"  placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="province_id" className="col-sm-2 col-form-label bfont" >   ولایت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <select id="province_id" required name="province_id" className="form-control form-control-sm  bfont">
                                                <option value=""> یک ولایت را انتخاب نماید  </option>
                                                {
                                                    this.state.listProvince.map( item  => (
                                                        <option value={item.id}> { item.name } </option>
                                                    ))
                                                }

                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="name" className="col-sm-2 col-form-label bfont" >  نام  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="text" id="name" required name="name" className="form-control form-control-sm "  />
                                        </div>
                                    </div>

                                    <div className="form-group row mr-sm-4">
                                        <label htmlFor="date" className="col-sm-2 col-form-label bfont" >  تاریخ ثبت  <span className="text-danger">*</span> </label>
                                        <div className="col-sm-7">
                                            <input type="date" id="date" required name="date" className="form-control form-control-sm  bfont"  placeholder="" />
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

                <ListDistrict list={this.state.list} getList={this.getList} />

            </>
        )
    }
}

export default District;