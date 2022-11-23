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
import icone from '../../assets/icone.png'
import icone1 from '../../assets/icone1.png'
import icone2 from '../../assets/icone2.png'
import{Image} from '../../components/Image/index'

export const FirstPage = () => {
return (
<>
<Styled.FirstPage>

<section className='apresentacao'>



<div>

<Text as ='h1'> Reduza os Gastos do sua empresa </Text>


<div   className='subTitle'>
	<Text as='span'>Somos uma agência de prestação de serviços com o objetivo de conectar empresas à profissionais.

</Text  >

<Text as='span' >
Contemplando diversas aréas tais como:
	Vigilância e Segurança privada, Reparo e Manutenção de Motores e Geradores,Obras de Urbanização "ruas ,praças e calçadas" Terceirização de Mão de Obra ...


</Text>

</div>


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

<div >
	<Text > sem taxas abusivas</Text>
<GiReceiveMoney/>

</div>

<div >

<Text>sem papelada</Text>
<MdOutlineComputer/>
</div>

</div>

<div className='idade'>

<Text  > 8</Text>
<Text as='span'> anos de experiência</Text>

</div>

</Styled.Sobre>




<Styled.Solucao>

<div>


<Text as='h2'>Por que somos a solução preferida pelos clientes?</Text>

<Text>Cansados da burocracia, da má gestão e da falta de transparência viemos trazer a solução a nível de serviço  o que você realmente necessita, focando na redução dos custos do  seu negoçio.</Text>

</div>

<div className='solucao'>


<div> <Image alt='icone' src={icone2}/>

<Text  as='h2'>Eficiência</Text>
<Text> Oferecemos tranquilidade na organização financeira, apoio jurídico, atendimento de qualidade .</Text> </div>


<div><Image alt='icone1' src={icone1}/>

<Text as='h2' >Segurança</Text>
<Text>Contamos com  colaboradores experientes,  e empresas privadas.</Text>
 </div>

<div>
	<Image alt='icone2'  src={icone}/>

<Text as='h2' >Transparência</Text>

<Text>Total transparencia no contrato e garantia de serviço.</Text>
</div>


</div>

</Styled.Solucao>

  </>
)
};
