import React , {Component} from "react";

class Home extends Component{

    render() {
        return(
            <>
                <div className="page-header">
                    <h3 className="page-title bfont"> خانه  </h3>
                </div>

                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">

                                <div style={{    height: '300px', textAlign: 'center', marginTop: '180px'}}>
                                    <h1 className='bfont'> خوش آمدید احمد کریمی    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Home;