import React from 'react'
import {Nav, NavItem} from './style'

const TopNav: React.FC = () => {
    return (
        <Nav>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/form'>Cadastrar</NavItem>
        </Nav>
    )
}

export default TopNav