import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Header } from './../styles/styles'

const logo = require('./../images/logo.svg');

export default () => {
    return (
        <Header>
            
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>

            <Navbar>
                <Link to="/">PRODUCT</Link>
                <Link to="/">COMPANY</Link>
                <Link to="/">PRICING</Link>
                <Link to="contact">CONTACT</Link>
            </Navbar>
        </Header>
    )
}
