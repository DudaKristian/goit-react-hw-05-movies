import { Outlet, NavLink } from "react-router-dom"
import styled from "styled-components";

const StyledLink = styled(NavLink)`
        color: black;
        text-decoration: none;
        padding-left: 20px;
                
        &.active {
        color: orange;
        }
    `;

const SharedLayout = () => {

    return (
        <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="movies">Movies</StyledLink>

            <Outlet/>
        </div>
    )
}

export default SharedLayout