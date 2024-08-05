import axios from "axios";
import { useState,useEffect } from "react";

const Display=()=>{
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

    const answer=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.productno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.price}</td>
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
            </tr>
            {answer}
        </table>
        </>
    )
}
export default Display;