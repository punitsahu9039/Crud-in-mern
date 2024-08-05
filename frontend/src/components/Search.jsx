import axios from "axios";
import { useState } from "react";

const Search=()=>{
    const [productno,setproductno]=useState("");
    const [searchdata,setsearchdata]=useState([]);

    const searchData=()=>{
        let api="http://localhost:8500/searchproduct";
        axios.post(api,{productno:productno}).then((res)=>{
                setsearchdata(res.data)
        })
    }

    const answer=searchdata.map((key)=>{
        return(
            <>
                <h4>{key.productno}</h4>
                <h4>{key.name}</h4>
                <h4>{key.city}</h4>
                <h4>{key.price}</h4>
            </>
        )
    })
    return(
        <>
        <h1>Search Page</h1>
        Enter Product Number : <input type="text" name="productno" onChange={(e)=>{setproductno(e.target.value)}}  /> <br />
        <button onClick={searchData}>Search</button>
        <hr />
        {answer}
        </>
    )
}
export default Search;