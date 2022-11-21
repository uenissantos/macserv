import React from 'react'
import *  as Styled from './styles'
import fundo2 from '../../assets/fundo2.jpg'
import fundo3 from '../../assets/fundo3.jpg'
import fundo4 from '../../assets/fundo4.jpeg'
import fundo5 from '../../assets/fundo5.jpeg'
import somos from '../../assets/somos.jpg'

import iconeMac from '../../assets/iconeMac.png'

import {Image} from '../../components/Image/index'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a
import { Carousel } from 'react-responsive-carousel'
import{Text} from '../../components/Text/index'
import {AiOutlineFundProjectionScreen}from 'react-icons/ai'
import {MdOutlineComputer}from 'react-icons/md'
import {MdStyle}from 'react-icons/md'




export const FirstPage = () => {
return (

<Styled.FirstPage>

<Carousel infiniteLoop={true} autoPlay={true}  >

<div  className='carrossel'>
<p  > texto de amostra 1</p>
<Image src={fundo2}  alt='fundo2'/>

</div>


<div   className='carrossel'>
	<p>texto de amostra 2</p>
	<Image src={fundo3}  alt='fundo2'/>

	</div>


<div  className='carrossel' >
	<p>texto de amostra 3</p>
	<Image src={fundo4}  alt='fundo2'/>

	</div>


<div  className='carrossel' >
	<p>texto de amostra 4</p>
	<Image src={fundo5}  alt='fundo2'/>

	</div>


</Carousel>


<div  className='somos'>



<Text as='h1'>   QUEM SOMOS</Text>
	<div className='divisoria'>

<div className='divisoria1'></div>

<Image src={iconeMac} />
<div className='divisoria1'  > </div>
	</div>

<Image  src={somos}/>

<Text >  Arquitetura, Arte e Design aliado à interpretação das necessidades de cada cliente, além de viabilizar as questões técnicas, funcionais e estéticas são ponto de partida para concepção de um projeto.</Text>

<Text>
A busca pela excelência e eficiência tanto no resultado final do trabalho quanto no atendimento e satisfação do cliente durante todo o processo de construção do projeto são os diferencias da Très, já que os clientes ficam satisfeitos a maneira que seus sonhos e necessidades são concretizados e, com isso, o espaço de fato melhora a qualidade de vida dos usuários. A equipe se dedica a todos nos mínimos detalhes, com objetivo de propor uma boa arquitetura aliada à arte, design, cores, materiais e objetos.
	 </Text>

</div>


<div className='projetos'>

<div>

<AiOutlineFundProjectionScreen/>

<Text as='h3'>PROJETOS</Text>

<div>
</div>

<Text>Nossa atuação é multidisciplinar e destaca-se em desenvolver projetos em diversas áreas: arquitetura residencial, comercial e corporativa. Tanto os desenhos executivos de uma arquitetura predial até os mínimos detalhes para construção e execução de uma marcenaria ou de um mobiliário são premissas nos diversos produtos para atender as necessidades específicas de cada cliente.</Text>

</div>

<div><MdOutlineComputer/>
<Text as='h3'> OBRAS  </Text>
<Text>Além de atender os nossos clientes com o projeto de arquitetura, nosso objetivo é concretizar e viabilizar a construção do espaço. Acreditamos que a assessoria para a implantação da obra junto ao time de engenheiros e projetistas complementares resulta na combinação de habilidades para alcançar a excelência.Trabalhamos em equipe do início ao fim do processo na busca pelas melhores soluções técnicas, funcionais e estéticas.</Text>

</div>

<div>
<MdStyle/>
<Text as='h3'>DECORAÇÃO
</Text>
<Text>Projetar, Reformar, Renovar, Arquitetar e Decorar, ou seja, interferir por completo na melhor interpretação do espaço é o ponto de partida para unificar os conceitos da arquitetura com a decoração, com objetivo de atender o nosso cliente com uma solução integrada e completa. Acreditamos que a sintonia entre a arquitetura e a decoração é essencial para um resultado harmonioso e coerente.</Text>

</div>
</div>
<div  className='title-grid'><Text  as='h2'>Conheça nossos projetos</Text>
</div>

<div class="grid-container">



  <div class="item1">  <Image  src={fundo2}/>  </div>
  <div class="item2"><Image  src={fundo3}/></div>
  <div class="item2"><Image  src={fundo2}/></div>
  <div class="item1"><Image  src={fundo3}/></div>
  <div class="item3"><Image  src={fundo2}/></div>
  <div class="item2"><Image  src={fundo3}/></div>
  <div class="item1"><Image  src={fundo2}/></div>
  <div class="item2"><Image  src={fundo3}/></div>

</div>


</Styled.FirstPage>
)
};
