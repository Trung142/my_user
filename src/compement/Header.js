import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogoutReducer } from '../redux/Action/UserAction';
import { useState } from 'react';
import { Product } from './product';
const Header = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.count);
    const [show, setShow] = useState(true);
    const handlecole = () => {
        setShow(true);
    }
    const handleLogout = () => {
        dispatch(handleLogoutReducer())

    }
    useEffect(() => {
        if (user && user.auth === false && window.location.pathname !== "/login") {
            Navigate("/");
            toast.success("logout success !")
        }
    }, [user])
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary mb-3">
                <Container fluid className='mx-3'>
                    <NavLink to="/" className="nav-link">Trung</NavLink>
                    <Nav className='carts1'>
                        <Link onClick={() => setShow(!show)}>
                            <i class="fa-solid fa-bag-shopping fa-shake"></i>
                            <button className='qaulyty'>0</button>
                        </Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        {user && (user.auth === true || window.location.pathname === "/") &&
                            <>
                                <Nav
                                    className="me-auto my-2 my-lg-0 d-flex justify-content-between"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                    <NavLink to="/user" className="nav-link">Maneger User</NavLink>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Nav>
                                <Nav className='carts '>
                                    <Link onClick={() => setShow(!show)}>
                                        <i class="fa-solid fa-bag-shopping fa-shake"></i>
                                        <button className='qaulyty'>0</button>
                                    </Link>
                                </Nav>

                                {user && user.email && <span>Wellcom user is "{user.email}"</span>}
                                <Nav>
                                    <NavDropdown title="Setting" id="basic-nav-dropdown" >
                                        {
                                            user && user.auth === true ?
                                                <NavDropdown.Item>
                                                    <NavLink className="nav-link" onClick={() => handleLogout()}>Log out</NavLink>
                                                </NavDropdown.Item> :
                                                <NavDropdown.Item>
                                                    <NavLink to="/login" className="nav-link">Log in</NavLink>
                                                </NavDropdown.Item>

                                        }

                                    </NavDropdown>
                                </Nav>
                            </>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Product

                show={show}
                handlecole={handlecole}
            />
        </>
    )
}
export default Header;