/* eslint-disable no-unused-vars */






const erros = {
	userName: 'Por favor, informe o nome  completo  da empresa. ',
	userEmail: 'Por favor, informe  e-mail do responsavel. ',
	userTelefone: 'Por favor, informe  o tefenone com DDD. '
}



export const Validate = (formValues, setdisabled) => {



	let email = formValues.extra_email.includes('@')

	email && email ? setdisabled('') : setdisabled('disabled')



}




export const Erro = (formValues, setErroEmail, setErroName,) => {


	formValues.subject.length > 3 ? setErroName('') : setErroName(erros.userName)


	formValues.extra_email.length > 5 && formValues.extra_email.match(/[a-z]+@[a-z]+\.com*/mg) ? setErroEmail('') : setErroEmail(erros.userEmail)


	return
}
