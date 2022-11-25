import styled, { css } from 'styled-components';

/* import folder from '../../assets/folder.jpg'
 */
export const Orcamento = styled.div`
${({ theme }) => css`
width: 100%;
text-align: center;
margin-top: ${theme.sizes.big};
height: 100vh;
h2{
width: 350px;
font-size: 30px;
margin:25px auto 25px auto;
background: transparent;
}



.form{

	display: flex;
	flex-direction: column;
justify-content: center;
align-items: center;
justify-content: space-around;

& input{
border: 1px solid ${theme.colors.ligth}  ;
border-radius:5% ;
box-shadow: 10px 10px 5px ${theme.colors.secundaryColor}  ;
margin: 25px auto 15px auto;
font-size: 20px;
border-radius: 5px;
width: 321px;
height: 65px;
text-align: center;

}


}
.disabled{

background-color: red;

}

.erro >span{
	font-size: 14px;
	margin:35px  auto 15px  auto;
color:${theme.colors.secundaryColor};

background: transparent;
	 }



button{
	width: 321px;
height: 65px;
	margin: 25px auto;
	overflow: hidden;
	align-items:flex-end;
	text-align: start;
	top: 0;
}


span{
	font-size: 15px;
}



${theme.breakpoints.lg}{


h3{

	left: 0;
	right: 0;
}






}

${theme.breakpoints.max}{
h3{
width: 420px;
}

.containerCheck{
	p{
width: 250px;
border: 2px solid red;
right: 90px;

	}
}


}

/*
 input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

}
input[type=number] {
   -moz-appearance: textfield;
   appearance: textfield;

} */
`}
`;


