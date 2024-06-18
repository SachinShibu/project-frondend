import axios from 'axios'
import React, { useState } from 'react'

const StudLogin = () => {
    const [data,setData]=useState(
        {
            "email": "",
            "password": ""
        }
    )

    const inputHandler =(event)=> {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {

        console.log(data)
        axios.post("http://localhost:8080/signIn", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Logged-in successfully !")
                }
                else {
                    alert("Login failed !")
                }
            }
        )
    }

    return (
        <div>
             <div class="alert alert-primary" role="alert">
                <center><b><h3>
                   STUDENT LOGIN
                </h3></b></center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Enter your Email</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Enter your Password</label>
                                <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudLogin