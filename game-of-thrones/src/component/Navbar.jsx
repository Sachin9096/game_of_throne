import React from "react";
import logo from '../Images/GoT.png'
import {AppBar , Toolbar, styled} from '@mui/material';

const Header = styled(AppBar)`
 background: #b63719;
 padding : 20px;
 position : static;
`

const Immage = styled('img')({
    height:"50px",
    width:"380px"
})

const Navbar = () =>{
    return (
        <>
            <Header>
                <Toolbar>
                       <Immage src={logo} alt="gameoFThrone" />
                </Toolbar>
            </Header>
        </>
    )
}

export default Navbar;