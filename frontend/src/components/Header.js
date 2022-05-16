import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from '../logo192.png'
import './NavCart.css'




function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    
    

    const logoutHandler = () => {
        dispatch(logout())
    }
 
    return (
        <header>
            <Row>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect >
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                        <img src={logo} width={200} margin={10} margin-top={10}/>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <SearchBox />
                        
                       
                        <Nav className="ml-auto" style={{justifyContent: 'space-evenly'}}>

                            
                            <LinkContainer to='/cart'>
                                
                                <Nav.Link ><i className="fas fa-shopping-cart">
                                    <span className="badge badge-warning" id="lblCartCount">{cartItems?.length}</span>
                                    </i>Cart
                                
                                </Nav.Link>
                                
                            </LinkContainer>

                            {userInfo ? (
                                
                                    <NavDropdown title={userInfo.name} id='username' style={{marginTop:'10px'}}>
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>

                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                    </NavDropdown>
                                
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue' style={{marginTop:'10px'}}>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/categorylist'>
                                        <NavDropdown.Item>Category</NavDropdown.Item>
                                    </LinkContainer>


                                </NavDropdown>
                            
                            )}
                            


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Row>
        </header>
    )
}

export default Header
