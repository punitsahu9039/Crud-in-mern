import axios from "axios";
import { useState,useEffect } from "react";

const Delete=()=>{
    const [mydata,setydata]=useState([]);

    const getData=()=>{
        let api="http://localhost:8500/displayproduct"
        axios.get(api).then((res)=>{
            setydata(res.data);
        })
    }

    useEffect(()=>{
        getData();
    },[])

    const DeleteData=(myid)=>{
        let api="http://localhost:8500/deleteproduct";
        axios.post(api,{myid}).then(()=>{
            alert("Data Deleted Successfully")
        })

    }

    const answer=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.productno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.price}</td>
                <td onClick={()=>{DeleteData(key._id)}} style={{color:"red",cursor:"pointer"}}>Delete</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Display Page</h1>
        <table border="5px" width="80%" align="center">
            <tr>
                <th>Product Number</th>
                <th>Name</th>
                <th>City</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            {answer}
        </table>
        </>
    )
}
export default Delete;