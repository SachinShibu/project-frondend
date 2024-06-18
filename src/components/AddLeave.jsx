import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddLeave = () => {
    const[data,setData] =useState(
        {
            "name":"",
            "class":"",
            "date":"",
            "rollno":"",
            "leavedate":"",
             "reasonforleave":"",
          
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8800/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="test")
                    {
                        alert("added")
                    }
                    else{
                        alert("not added")
                    }
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">class</label>
                            <input type="text" className="form-control" name="class" value={data.class} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">date</label>
                            <input type="date"  id="" className="form-control" name="date" value={data.date} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">rollno</label>
                            <input type="text" className="form-control" name="rollno" value={data.rollno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">leavedate</label>
                            <input type="date"  id="" className="form-control" name="leavedate" value={data.leavedate} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">reasonforleave</label>
                            <input type="text" className="form-control" name='reasonforleave' value={data.reasonforleave} onChange={inputHandler} />
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

export default AddLeave