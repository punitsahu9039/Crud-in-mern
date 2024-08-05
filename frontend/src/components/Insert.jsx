import { useState } from "react";
import axios from 'axios'
const Insert=()=>{
    const [input,setinput]=useState({});

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinput(values=>({...values,[name]:value}))
    }

    const savedata=()=>{
        let api="http://localhost:8500/insertproduct";
        axios.post(api,input).then(()=>{
            alert("Data Saved Successfully");
        })
    }


    return(
        <>
        <h1>Insert Product Details</h1>

        Enter Product No. : <input type="text" name="productno" onChange={handleinput}  /> <br />
        Enter Product Name : <input type="text" name="name" onChange={handleinput}  /> <br />
        Enter City : <input type="text" name="city" onChange={handleinput}  /> <br />
        Enter Price : <input type="text" name="price" onChange={handleinput}  /> <br />
        <button onClick={savedata}>Save</button>

        
        </>
    )
}
export default Insert;