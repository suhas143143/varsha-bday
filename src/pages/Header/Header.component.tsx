import { Link } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "../../components/navbar/Navbar.component"
import styled from "styled-components"


const LinkStyle = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: ${props => props.theme.fonts.sizes.heading};
    font-weight: ${props => props.theme.fonts.weights.bold};

    &:hover {
        border-bottom: 2px solid white;
    }
    &:active {
        border-bottom: 2px solid white;
    }
`

const Header = () => {

    const NavbarProps = () => {
        return (
            <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' gap={1} sx={{ height: '10vh', backgroundColor: 'purple' }}>

                <Box>
                    <LinkStyle to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</LinkStyle>
                </Box>

                <Box>
                    <LinkStyle to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</LinkStyle>
                </Box>

            </Box>
        )
    }

    return (
        <>
            <Navbar children={<NavbarProps />} />
        </>
    )
}

export default Header 