import React from 'react'
import { Outlet } from 'react-router-dom';
import *  as Styled from './styles'


export const Home = () => {
return (

<Styled.Home>



<Outlet/>

</Styled.Home>
)
};
