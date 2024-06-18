import axios from 'axios'
import React, { useState } from 'react'

const FacultyAddLeave = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "batch": "",
            "date": "",
            "rollno": "",
            "Sdate": "",
            "Edate": "",
            "Tdate": "",
            "reasonforleave": "",
            "Label": ""

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "test") {
                    alert("added")
                }
                else {
                    alert("not added")
                }
            }
        )
    }
    return (
        <div>


            <div class="alert alert-primary" role="alert">
                <center><b><h3>
                    FILL YOUR LEAVE FORM
                </h3></b></center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Enter Your Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Enter Your Batch</label>
                                <select name="batch" value={data.batch} onChange={inputHandler} id="" className="form-control">
                                    <option value="" disabled>Select a batch</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Enter the Starting Date Of Your Leave</label>
                                <input type="date" id="" className="form-control" name="Sdate" value={data.Sdate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Enter the ending Date Of Your Leave</label>
                                <input type="date" id="" className="form-control" name="Edate" value={data.Edate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Enter Your Roll No</label>
                                <input type="text" className="form-control" name="rollno" value={data.rollno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Todays Date</label>
                                <div class="col">
                                    <input type="date" name="Tdate" id="" value={data.Tdate} onChange={inputHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Reason For Your Leave</label>
                                <input type="text" className="form-control" name='reasonforleave' value={data.reasonforleave} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Your Label</label>
                                <input type="text" className="form-control" name='label' value="Student" onChange={inputHandler} readOnly />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FacultyAddLeave