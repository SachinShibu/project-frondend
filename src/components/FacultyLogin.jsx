import React from 'react'

const FacultyLogin = () => {
    return (
        <div>

            <div class="alert alert-primary" role="alert">
                <center><b><h3>
                    FACULTY LOGIN
                </h3></b></center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Enter your Email</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Enter your Password</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FacultyLogin