import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { adminMenu, userMenu } from "../Data/data";
import { Link, useLocation,useNavigate } from "react-router-dom";

import "./Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate =  useNavigate()
 const handleLogout=()=>{
  localStorage.clear()
  navigate('/login')

 }

  const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;
  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="sidebar_container">
          <Navbar.Brand href="#home">DOCTOR APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto sidebar_links">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `}  onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Sidebar;
