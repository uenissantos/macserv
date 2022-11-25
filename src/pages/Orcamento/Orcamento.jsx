



























/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React ,{useState, useEffect} from 'react'
import *  as Styled from './styles'
import {Input} from '../../components/input/index'
import {Text} from '../../components/Text/index'
import {TextArea} from '../../components/textArea/index'
import { Form } from '../../components/Form/Form'

export const Orcamento = () => {

const [valueButton, setValueButton] = useState('ENVIAR');

function handleSubmit (e){

	    setTimeout(function() {

setValueButton('ENVIANDO...')


	    }, 3);

}


return (

<Styled.Orcamento   >



<Text as='h2'>   SOLICITE SEU ORÇAMENTO</Text>

<Form classe='form' action="https://postmail.invotes.com/send"
    method="post" id="email_form">

    <Input type="text" name="subject" placeholder="Nome da empresa"    />


   < Input   type="tel" name="extra_phone_number"
                placeholder="telefone"  />

		< Input type="text" name="extra_email"
                placeholder="E-mail"   />

    <TextArea  name="text" placeholder="Mensagem"></TextArea>



    <Input type="hidden" name="access_token" value="9klay5wvm2ogkdqlh60jnnkk" />

    <Input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
    <Input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />





{/*   <input type="hidden"
                name="sms_format" value="true" /> */}




 <Input  click={handleSubmit} id="submit_form " type="submit" value={valueButton} />




</Form>




</Styled.Orcamento>




)
};
