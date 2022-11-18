import React from 'react'
import { MenuLinks } from '../../components/navBar/menu';
import *  as Styled from './styles'
import { NavBarInformation } from '../../data/NavBarInformation';

export const NavBar = () => {
return (

<Styled.NavBar>

	<MenuLinks  information={NavBarInformation} />

</Styled.NavBar>
)
};
