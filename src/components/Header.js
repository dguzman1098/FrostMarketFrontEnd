import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap'
import { GiIceBolt } from 'react-icons/gi'

const Header = () => {
    return (
        <div >

            {/* <nav className="navbar navbar-expand-md" style={{ backgroundColor: "#54AB9C", fontWeight: "bolder", height: "50px" }}>
                    <div>
                        <Link to="/home" style={{ marginLeft: "55px", marginRight: "35px", color: "black" }}>FROSTMARKET</Link>
                        <Link to="/home/tickers" style={{ marginRight: "35px", color: "black" }} >TICKERS</Link>
                        <Link to="/home/stock-charts" style={{ marginRight: "35px", color: "black" }} >VIEW CHARTS</Link>
                        <Link to="/home/contact" style={{ marginRight: "35px", color: "black" }}>CONTACT</Link>
                    </div>
                </nav> */}
            <Navbar
                color="info"
                expand="md"
                fixed="top"

            >
                <NavbarBrand href="/home">
                    <GiIceBolt size={'2em'} className='m-2' />
                    FROSTMARKET
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar >
                    <Nav
                        className="me-auto"
                        navbar
                        style={{fontSize: '18px'}}
                    >
                        <NavItem>
                            <NavLink href="/home/tickers">
                                ETFs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/home/ticker-details">
                                Stock Details
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Tools
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <NavLink href="/home/stock-charts">
                                        View Stock Charts
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/home/ticker-details">
                                        Stock Daily Open/Close
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/home">
                                        Crypto coming soon...
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Close
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                    <NavLink href="/">
                        Sign Out
                    </NavLink>

                </Collapse>
            </Navbar>


        </div>
    )
}

export default Header
