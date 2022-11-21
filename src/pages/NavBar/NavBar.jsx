import React,{useState} from 'react'
import { MenuLinks } from '../../components/navBar/menu';
import *  as Styled from './styles'
import { NavBarInformation } from '../../data/NavBarInformation';
import {Image}from '../../components/Image/index'
import  logo from '../../assets/logo.png'
import  logo2 from '../../assets/logo2.jpg'

import{BsWhatsapp} from 'react-icons/bs'
import {FiMenu}from 'react-icons/fi'
import { Links } from '../../components/navBar/links/NavLinks';
import {AiOutlineClose}from 'react-icons/ai'

import { Button } from '../../components/Button/Button';

export const NavBar = () => {

const [stateButton, setStateButton ] =useState(false)
const handleButton =()=> setStateButton(!stateButton)

return (
<>
<Styled.NavBar  stateButton={stateButton} >

<Image src={logo} alt='macServ'  />

<ul>

	<Image  src={logo2} alt='logo2' />

	<MenuLinks  information={NavBarInformation} />

</ul>
<div  className='icones'>
<Links  classe='whatsapp' >
<BsWhatsapp/>
  </Links>

  <Button  click={handleButton} >
  {stateButton?  <AiOutlineClose/>:<FiMenu/>}
  </Button>

</div>

</Styled.NavBar>








  </>
)
};
