import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import *  as Styled from './styles'
import { Footer } from '../Footer/Footer';

export const Home = () => {
return (

<Styled.Home>


<NavBar/>


<Outlet/>

<Footer/>
</Styled.Home>
)
};
