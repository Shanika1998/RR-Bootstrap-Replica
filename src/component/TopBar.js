import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function TopBar(){
return(
<Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src='../public/instacart-logo.png' /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button> {''}
        </Nav>
    </Navbar.Collapse>
</Navbar>
)
}

export default TopBar