import axios from "axios";
import { useState,useEffect } from "react";

const Productsummary=()=>{
    const [mydata,setydata]=useState([]);

    const getData=()=>{
        let api="http://localhost:8500/productsummary"
        axios.get(api).then((res)=>{
            setydata(res.data);
        })
    }

    useEffect(()=>{
        getData();
    },[])

    let total=0;

    const answer=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.productno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.price}</td>
                <td>{total=total+key.price}</td>
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
        <h4 align="end">Total={total}</h4>
        </>
    )
}
export default Productsummary;