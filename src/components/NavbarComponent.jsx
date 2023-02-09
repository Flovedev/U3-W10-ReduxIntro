import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" expand="lg" id="nav-bar">
      <Navbar.Brand href=".">inFloJobs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={"/"}>
            <div className="nav-link text-white">Home</div>
          </Link>
          <Link to={"/favourites"}>
            <div className="nav-link text-white">Favourites</div>
          </Link>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
