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
<Text as='h2' >Climatização:</Text>
<Text>-projetos de climatização de ambientes</Text>
<Text>-Instalação residencial e comercial</Text>
<Text>-Manutenção preventiva e corretiva;</Text>
<Text>-Limpeza e higienização dos dutos de refrigeração</Text>

<Text as='h2'>Segurança eletrônica:</Text>
<Text>-Projeto,instalação e manutenção de alarme,</Text>
<Text>cerca elétrica,circuito fechadode TV</Text>
<Text>-Automatizações de Portões e PABX.</Text>
<Text>  Atividades de monitoramento de sistemas de segurança eletronico</Text>


<Text as='h2'>Locação de mão de obra:</Text>
<Text>-Vigia;</Text>
<Text>-Porteiro;</Text>
<Text>-Recepcionista comum e bilingue</Text>
<Text>-Segurança de evento.</Text>
<Text> Serviços de escritorio e apoio administrativo</Text>


<Text as='h2' >Manutenção:</Text>
<Text>-Zeladoria;</Text>
<Text>-Manutençãoe limpeza de piscinas;</Text>
<Text> -Limpeza industrial,comercial,predial e especializada em pós-obra.</Text>
<Text>Reparo e manutençao de computadores e equipamentos periféricos</Text>


<Text  as='h2'> Aluquel</Text>
<Text> aluguel de máquinas e equipamento de escritórios </Text>
<Text> aluguel de de maquinas e equipamentos comerciais e Industriais,sem operador</Text>


<Text as='h2'> Comercio varejista</Text>
<Text>  materiais elétricos</Text>
<Text> materiais de construção civil</Text>
<Text> equipamentos e  suplementos de informatica</Text>
<Text>tratamento de dados ,provedores de serviços de aplicação e serviços de hospedagem na internet</Text>

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
