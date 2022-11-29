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

.visible{

margin: ${theme.sizes.big} auto;
display: flex;
flex-direction: column;
position: absolute;
width: 350px;
height: 350px;
background-color: white;
padding: 15px;

img{

height: 100%;
background: transparent;

}

}

.close{

button{
	font-size: 30px;
width: 40px;
height: 40px;
position: absolute;
right: 20px;
text-align: center;
background-color: gray;
color: white;





}
& :hover{
		width: 80px;

	::before{
		content: 'fechar';
		font-size: 20px;
	}
}
}



.invisible{
	display: none;
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
box-shadow: 5px 5px 5px ${theme.colors.secundaryColor}  ;
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

.visible{
width: 500px;

}
h3{

	left: 0;
	right: 0;
}






}

${theme.breakpoints.max}{


	.visible{
height: 600px;
width: 800px;
right:10px;
}


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


