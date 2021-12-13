import React from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import {GoMarkGithub} from 'react-icons/go'
const Footer = () => {
    return (
        <div>
            <footer className="footer" style={{ backgroundColor: "#54AB9C", fontWeight: "bolder", color: "black" }}>
                <Navbar
                    color="info"
                    expand="md"
                    fixed="bottom"
                >
        
                  
                        <NavLink href="https://github.com/dguzman1098/FrostMarketFrontEnd">

                           <GoMarkGithub/> Github
                        </NavLink>
                    
                    Created by Diego Guzman
                </Navbar>
            </footer>
        </div>
    )
}

export default Footer
