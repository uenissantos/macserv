import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import *  as Styled from './styles'


export const Home = () => {
return (

<Styled.Home>
<NavBar/>


<Outlet/>

</Styled.Home>
)
};
