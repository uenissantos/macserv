import React from 'react'
import *  as Styled from './styles'
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';
import iconeMac from '../../assets/iconeMac.png'
import logo2 from '../../assets/logo2.jpg'

export const Footer = () => {
return (

<Styled.Footer>

	<Image  src={iconeMac} alt='icone'/>

	<Image  src={logo2} alt='logo'/>

	<Text as='p'>
	Copyright ©  2022  <span> MacServ Prestadora de Serviços</span>  Todos os direitos reservados.
	</Text>
</Styled.Footer>
)
};
