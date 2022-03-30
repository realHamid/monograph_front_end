import React , {Component} from "react";
import axios from "./axios/axios";
import Main from './layout/Main'


class Login extends Component{

    userNameInput = null;
    passWordInput = null;

    state = {
        isLogin : false,
        message :''
    }


    obSubmitForm = (e) => {

        e.preventDefault();
        let userName = this.userNameInput.value;
        let password = this.passWordInput.value;
        let data = {userName,password};
        console.log(data)
        if(userName.length >= 1 && password.length >= 1){
            axios.post('/login',data).then((response) => {

                if(response.data.status_login === "true"){
                    this.saveLoginData(response.data);
                }else {
                    this.setState((oldState,props)  => {
                        return {
                            ...oldState,
                            message : ' این نام کاربری یا رموز عبور اشتباه میباشد! '
                        }
                    });
                }

            }).catch((err) => {
                this.setState((oldState,props)  => {
                    return {
                        ...oldState,
                        message : ' سرور خاموش میباشد. '
                    }
                });
                console.log(err);
            });
        }else {
            alert(' اطاعات وارد شده معتبر نیست  ')
        }
    }


    saveLoginData = userData => {
        let user = {
            id: userData.id,
            user_name: userData.name,
            user_phone: userData.phone,
            user_photo: userData.photo,
            api_token: userData.api_token,
        }
        localStorage.setItem('user-data', JSON.stringify(user));

        this.setState((oldState,props)  => {
            return {
                ...oldState,
                isLogin : true
            }
        });
    }




    login_form = () => {
        return (
            <div className="container-scroller" dir='rtl'>
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left p-5">
                                    <div className="brand-logo text-center">
                                        <img
                                            src="https://www.bootstrapdash.com/demo/purple/jquery/template/assets/images/logo.svg" />
                                    </div>
                                    <h4 className=' font-weight-light bfont text-right'> خوش آمدید  </h4>
                                    {/*<h6 className=" text-right bfont"> ورود به اکانت  </h6>*/}
                                    <form className="pt-3">
                                        <div className="form-group">
                                            <input type="text" ref={e1 => this.userNameInput = e1} className="form-control form-control-lg bfont" placeholder="نام کاربری " />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <input type="password" ref={e1 => this.passWordInput = e1 } className="form-control form-control-lg bfont" placeholder="رموز عبور " />
                                        </div>
                                        <p style={{paddingTop:'10px',color:'red',display:'flex',fontSize:'16px'}}>
                                            {
                                                this.state.message
                                            }
                                        </p>
                                        <div className="mt-3">
                                            <button type='submit' onClick={this.obSubmitForm} className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn bfont " > وارد شدن  </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return(
            <>
                {
                    (this.state.isLogin === false ) ?
                        this.login_form() :
                        <Main />
                }
            </>
        )
    }
}

export default Login;