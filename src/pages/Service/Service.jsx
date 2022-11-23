import React from 'react'
import *  as Styled from './styles'
import {Image} from '../../components/Image/index'
import {Text} from '../../components/Text/index'
import servico1 from '../../assets/servico1.png'
import servico2 from '../../assets/servico2.png'
import servico3 from '../../assets/servico3.png'
import servico4 from '../../assets/servico4.png'

import servico5 from '../../assets/servico5.jpg'
import servico6 from '../../assets/servico6.png'
import servico7 from '../../assets/servico7.png'
import servico8 from '../../assets/servico8.png'
import servico9 from '../../assets/servico9.png'


export const Service = () => {
return (

<Styled.Service>
<Image/>

<div  className='servicos'>
<div >
<Text as='h2' >Arcondicionado:</Text>
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
<Text>-Recepcionista(comum e bilingue);</Text>
<Text>-Segurança de evento.</Text>
<Text> Serviços de escritorio e apoio administrativo</Text>


<Text as='h2' >Manutenção:</Text>
<Text>-Zeladoria;</Text>
<Text>-Manutençãoe limpeza de piscinas;</Text>
<Text> -Limpeza industrial,comercial,predial e especializadaempós-obra.</Text>
<Text>Reparação e manutençao de computadores e equipamentos periféricos</Text>


<Text  as='h2'> Aluquel</Text>
<Text> aluguel de máquinas e equipamento de escritórios </Text>
<Text> aluguel de de maquinas e equipamentos comerciais e Industriais,sem operador</Text>


<Text as='h2'> Comercio varejista</Text>
<Text>  materiais elétricos</Text>
<Text> materiais de construção civil</Text>
<Text> equipamentos e  suplementos de informatica</Text>
<Text>tratamento de dados ,provedores de serviços de aplicação e serviços de hospedagem na internet</Text>

</div>


<div className='images'>



	<Image src={servico1} alt='servico1' />
<Image src={servico2} alt='servico2' />
<Image src={servico3} alt='servico3' />
<Image src={servico4} alt='servico4' />
<Image src={servico5} alt='servico5' />
<Image src={servico6} alt='servico6' />
<Image src={servico7} alt='servico7' />
<Image src={servico8} alt='servico8' />
<Image src={servico9} alt='servico9' />
 </div>



</div>

</Styled.Service>
)
};
