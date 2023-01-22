import React from 'react';

import './navbar.css';
import Nav from 'react-bootstrap/Nav';

import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = () => {


    return (
        <>


            <Offcanvas show={true} backdrop="" scroll={true}>
                <Offcanvas.Header>
                    <img className='logo' src="https://img.freepik.com/premium-vector/hexagon-pen-symbol-logo-design-vector-writer-journalist-education_726484-28.jpg?w=2000" width={200}
                        alt="" />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav defaultActiveKey="/home" className="flex-column navitem">
                        <Nav.Link className='navName home' href="/home"> Home</Nav.Link>
                        <Nav.Link className='navName' href="/home"> Blogs</Nav.Link>
                        <Nav.Link className='navName' href="/home"> Videos</Nav.Link>
                        <Nav.Link className='navName' href="/home">About Me</Nav.Link>
                        <Nav.Link className='navName' href="/home">Contatct</Nav.Link>


                    </Nav>
                    <div className='ms-5'>
                        <h6 className='iconText'>Follow me on</h6>
                        <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook icons" /></a>
                        <a href="https://www.facebook.com/"><i className="fa-brands fa-youtube icons" /></a>
                        <a href="https://www.facebook.com/"><i className="fa-brands fa-instagram icons" /></a>
                        <a href="https://www.facebook.com/"><i className="fa-brands fa-pinterest icons" /></a>
                    </div>


                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Navbar;
