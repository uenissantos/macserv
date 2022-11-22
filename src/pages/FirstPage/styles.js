import styled, { css } from 'styled-components';

import t from '../../assets/t.jpg'

export const FirstPage = styled.div`
${({ theme }) => css`
width: 100%;
height: 90vh;
text-align: center;
margin-top: ${theme.sizes.big};
background-image:url(${t}) ;
background-repeat: no-repeat;
background-size: cover;



.apresentacao{
	width: 100%;
height: 90vh;
display: grid;
grid-template-columns: 1fr;
padding: 25px;
background-color: white;
opacity: 0.8;
align-items: center;
text-align: center;


h1{

	margin: 20px  10px;
}


span{
	font-size: 20px;
	margin: 25px  5px;
	color:black;

}






}

.botao{
overflow: hidden;
background-color:white;

margin-top: 85px;
button{
	display: flex;
	height: 55px;
	width: 255px;
align-items: center;
justify-content: space-around;
border-radius: 20px;
background-color: ${theme.colors.primaryColor};
color: black;
font-size: 18px;
margin: 20px;



svg{
	height: 20px;
	width: 22px;
}




}

}

`}
`;




export const Sobre = styled.div`
${({ theme }) => css`
width: 100%;
height: 100vh;
align-items: center;
text-align: center;

h2{
	margin: 10px;
	padding: 15px;
}

h3{

color: ${theme.colors.black};
font-size: 22px;
}

p{
	color: gray;
	font-size: 20px ;
	margin: 20px;
};

.icon{
	display: flex;
	flex-direction: column;
	height: 300px;
align-items: center;
justify-content: space-evenly;
svg{

height: 60px;
width: 60px;
color: gray;
}



}





`}
`;
