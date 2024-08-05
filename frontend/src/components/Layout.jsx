import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';


const Layout=()=>{
    const navigate=useNavigate();
    return(
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Test</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("home")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("insertproduct")}} >Insert Product</Nav.Link>
            <Nav.Link onClick={()=>{navigate("display")}}>Dislay</Nav.Link>
            <Nav.Link onClick={()=>{navigate("productsumary")}}>Product Summary</Nav.Link>
            <Nav.Link onClick={()=>{navigate("searchproduct")}}>Search Product</Nav.Link>
            <Nav.Link onClick={()=>{navigate("delete")}} >Delete</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet/>
      <hr />
      www.footer.com
        </>
    )
}
export default Layout;