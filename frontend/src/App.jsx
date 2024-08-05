import { BrowserRouter,Route,Routes } from "react-router-dom";
import Display from "./components/Display";
import Home from "./components/Home";
import Insert from "./components/Insert";
import Summary from "./components/Summary";
import Search from "./components/Search";
import Delete from "./components/Delete";
import Layout from "./components/Layout";
import Productsummary from "./components/ProductSummary";



const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/insertproduct" element={<Insert/>}/>
      <Route path="/display" element={<Display/>}/>
      <Route path="/productsumary" element={<Productsummary/>}/>
      <Route path="/searchproduct" element={<Search/>}/>
      <Route path="/delete" element={<Delete/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;