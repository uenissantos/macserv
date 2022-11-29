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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {AiFillAccountBook} from 'react-icons/ai'
import {AiFillAlert} from 'react-icons/ai'
import {AiFillAlipayCircle} from 'react-icons/ai'
import {AiFillAlipaySquare} from 'react-icons/ai'






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

<div className='carousel'>

<Text as='h2'>  Nossos Parceiros</Text>
<Text> Trabalhamos com foco no resultado para que possamos melhorar nosso desempenho e produtividade. Antenados com o mercado de trabalho e sua evolução, estamos sempre em busca da excelência.</Text>


<Carousel

autoPlay={true}
autoFocus={true}
centerMode={true}
infiniteLoop={true}
showStatus={false}
centerSlidePercentage={30}
interval={4000}
>
                <div  className='item'>

			<AiFillAccountBook/>
			<p> title</p>

                </div>
                <div className='item'>
			 <AiFillAlert/>
<p> title</p>
                </div>
                <div className='item'>
			 <AiFillAlipayCircle/>
			 <p> title</p>

                </div>


                <div className='item'>
			 <AiFillAlipaySquare/>
			 <p> title</p>

                </div>

			 <div className='item'>
			 <AiFillAlert/>
			 <p> title</p>

                </div>
                <div className='item'>
			 <AiFillAlipayCircle/>
			 <p> title</p>

                </div>

            </Carousel>

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

<div className='carousel'>

<Text as='h2'> Clientes</Text>
<Text> A terceirização de mão de obra é uma prática usual em diversos tipos de organizações. Atualmente, é possível terceirizar quase todos os serviços, desde portaria, limpeza e segurança, passando pela atuação em transporte e logística até contabilidade, entre outras áreas. A conotação de praticidade em processos e redução de custos diversos é ponto comum para quem opta por essa modalidade.</Text>


<Text>  Você já conta com serviços terceirizados na sua empresa?
</Text>

<Text as='span'>Fale com a MacServ !</Text>
<Carousel

autoPlay={true}
autoFocus={true}
centerMode={true}
infiniteLoop={true}
showStatus={false}
centerSlidePercentage={35}
>
                <div  className='item'>

			<AiFillAccountBook/>
			<p> title</p>

                </div>
                <div className='item'>
			 <AiFillAlert/>
<p> title</p>
                </div>
                <div className='item'>
			 <AiFillAlipayCircle/>
			 <p> title</p>

                </div>


                <div className='item'>
			 <AiFillAlipaySquare/>
			 <p> title</p>

                </div>

			 <div className='item'>
			 <AiFillAlert/>
			 <p> title</p>

                </div>
                <div className='item'>
			 <AiFillAlipayCircle/>
			 <p> title</p>

                </div>

            </Carousel>

</div>



</Styled.Solucao>
















  </>
)
};
