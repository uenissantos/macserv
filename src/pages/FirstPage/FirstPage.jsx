import React from 'react'
import *  as Styled from './styles'
/* import somos from '../../assets/somos.jpg'
 */import{BsWhatsapp ,BsListCheck} from 'react-icons/bs'

/* import iconeMac from '../../assets/iconeMac.png'
 */
import{Text} from '../../components/Text/index'
import {Button} from '../../components/Button/Button'
import {GiReceiveMoney} from 'react-icons/gi'
import {MdOutlineComputer} from 'react-icons/md'

export const FirstPage = () => {
return (
<>
<Styled.FirstPage>

<section className='apresentacao'>



<div>

<Text as ='h1'> Reduza os Gastos do sua empresa </Text>

<Text as='span'>Somos uma agência de prestação de serviços com o objetivo de conectar empresas à profissionais.

</Text  >

<Text as='span' >
Contemplando diversas aréas tais como:
	Vigilância e Segurança privada, Reparo e Manutenção de Motores e Geradores,Obras de Urbanização "ruas ,praças e calçadas" Terceirização de Mão de Obra ...

</Text>


<div  className='botao '   >
		<Button  className='whatsapp'>
   Orçamento via WhatsApp <BsWhatsapp/>

</Button>

<Button  className='list'>
 lista de serviços <BsListCheck/>
</Button>
</div>


</div>


</section>


</Styled.FirstPage>

<Styled.Sobre>


<Text as='h2'> Sobre nós</Text>

<Text as='h3'>Administradora de Serviços que acaba com a burocracia e garante transparência </Text>

<Text >Há mais de 8 anos garantindo o perfeito funcionamento de sua empresa  e buscando o máximo de eficiência operacional para que você aproveite melhor o seu tempo.

</Text>


<Text > Oferecemos o resultado que melhor contribui para a sua qualidade de vida ao mesmo tempo em que reduzimos os custos operacionais, tornando a gestão mais eficiente.</Text>


<div className='icon'>

<Text > sem taxas abusivas</Text>
<GiReceiveMoney/>


<Text>sem papelada</Text>
<MdOutlineComputer/>
</div>

<div>

<Text id='idade' >8</Text>
<Text as='span'> anos de experiência</Text>

</div>

</Styled.Sobre>


  </>
)
};
