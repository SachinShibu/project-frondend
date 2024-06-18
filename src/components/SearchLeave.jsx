import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchLeave = () => {
    const [data, setData] = useState(
        {
            "name": ""

        }
    )
    const [result, setresult] = useState(
        []
    )
    //delete function
    const DeleteLeave = (name) => {
        let input = { "_id": name }
        axios.post("http://localhost:8800/delete",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("successfully deleted")
                }else{
                    alert("error in deletion")
                }
            }
        ).catch().finally()
    }
    //input value fetching
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    // search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8800/search", data).then(
            (response) => {

                setresult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Search Leave</label>
                                <input type="text" name="name" value={data.name} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>

                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">class</th>
                                    <th scope="col">date</th>
                                    <th scope="col">rollno</th>
                                    <th scope="col">leavedate</th>
                                    <th scope="col">reasonforleave</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.name}</th>
                                                <td>{value.class}</td>
                                                <td>{value.date}</td>
                                                <td>{value.rollno}</td>
                                                <td>{value.leavedate}</td>
                                                <td>{value.reasonforleave}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{DeleteLeave(value.name)}}>DELETE</button></td>
                                            </tr>
                                        }
                                    

                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchLeave