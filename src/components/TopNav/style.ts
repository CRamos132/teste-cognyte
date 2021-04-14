import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: purple;
    color: white;
`

const NavItem = styled(Link)`
    margin: 0 8px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    &:visited {
        color: white;
    }
`

export { Nav, NavItem }