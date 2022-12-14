import React from 'react'
import *  as Styled from './styles'
import {Image} from '../../components/Image/index'
import {Text} from '../../components/Text/index'
import servico1 from '../../assets/servico1.png'
import servico2 from '../../assets/servico2.png'
import servico3 from '../../assets/servico3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
export const Service = () => {

/*
const wheell=()=>{

document.querySelector('#items')
.addEventListener('wheel', event =>{
	event.deltaY >0 ? event.target.scrollBy(300,0):event.target.scrollBy(-300,0);
})

}

useEffect(() => {
	return () => {

		wheell()
	};
},); */

return (

<Styled.Service>

{/* <div  id='items-wrapper'>

<div id='items'>

	 <div >
                    <Image src={servico1} alt='image1'/>
                </div>

                <div  className='item' >
                    <Image src={servico2} alt='image2' />
                </div>


		<div className='item'   >
                    <Image src={servico3} alt='servico3'/>
                </div>


			 <div className='item'>
                    <Image src={servico1} alt='image1'/>
                </div>

                <div  className='item' >
                    <Image src={servico2} alt='image2' />
                </div>


		<div className='item'   >
                    <Image src={servico3} alt='servico3'/>
                </div>


</div>


</div> */}


<div className='slider'>

<Carousel

autoPlay={true}
autoFocus={true}
centerMode={true}
infiniteLoop={true}
showStatus={false}
>
                <div>
			 <Image src={servico1} alt='image1'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
			 <Image src={servico2} alt='image2' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
			 <Image src={servico3} alt='servico3'/>
                    <p className="legend">Legend 3</p>
                </div>


                <div>
			 <Image src={servico1} alt='image1'/>
                    <p  id='te' className="legend">Legend 1</p>
                </div>
                <div>
			 <Image src={servico2} alt='image2' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
			 <Image src={servico3} alt='servico3'/>
                    <p className="legend">Legend 3</p>
                </div>


            </Carousel>
</div>



<div  className='servicos'>
<div >
<Text as='h2' >Climatiza????o:</Text>
<Text>-projetos de climatiza????o de ambientes</Text>
<Text>-Instala????o residencial e comercial</Text>
<Text>-Manuten????o preventiva e corretiva;</Text>
<Text>-Limpeza e higieniza????o dos dutos de refrigera????o</Text>

<Text as='h2'>Seguran??a eletr??nica:</Text>
<Text>-Projeto,instala????o e manuten????o de alarme,</Text>
<Text>cerca el??trica,circuito fechadode TV</Text>
<Text>-Automatiza????es de Port??es e PABX.</Text>
<Text>  Atividades de monitoramento de sistemas de seguran??a eletronico</Text>


<Text as='h2'>Loca????o de m??o de obra:</Text>
<Text>-Vigia;</Text>
<Text>-Porteiro;</Text>
<Text>-Recepcionista comum e bilingue</Text>
<Text>-Seguran??a de evento.</Text>
<Text> Servi??os de escritorio e apoio administrativo</Text>


<Text as='h2' >Manuten????o:</Text>
<Text>-Zeladoria;</Text>
<Text>-Manuten????oe limpeza de piscinas;</Text>
<Text> -Limpeza industrial,comercial,predial e especializada em p??s-obra.</Text>
<Text>Reparo e manuten??ao de computadores e equipamentos perif??ricos</Text>


<Text  as='h2'> Aluquel</Text>
<Text> aluguel de m??quinas e equipamento de escrit??rios </Text>
<Text> aluguel de de maquinas e equipamentos comerciais e Industriais,sem operador</Text>


<Text as='h2'> Comercio varejista</Text>
<Text>  materiais el??tricos</Text>
<Text> materiais de constru????o civil</Text>
<Text> equipamentos e  suplementos de informatica</Text>
<Text>tratamento de dados ,provedores de servi??os de aplica????o e servi??os de hospedagem na internet</Text>

</div>

{/*
<div className='images'>


	<Image src={servico1} alt='servico1' />
<Image src={servico2} alt='servico2' />
<Image src={servico7} alt='servico7' />
<Image src={servico3} alt='servico3' />



<Image src={servico4} alt='servico4' />
<Image src={servico9} alt='servico9' />
<Image src={servico8} alt='servico8' />

<Image src={servico6} alt='servico6' />

 </div> */}

</div>

</Styled.Service>
)
};
