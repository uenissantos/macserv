import styled, { css } from 'styled-components';
import folder from '../../assets/folder.jpg'

import t from '../../assets/t.jpg'

export const FirstPage = styled.div`
${({ theme }) => css`
width: 100%;
height: 60vh;
text-align: center;
margin-top: ${theme.sizes.big};
background-image:url(${t}) ;
background-repeat: no-repeat;
background-size: cover;



.apresentacao{
	width: 100%;
height: 60vh;
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
display:flex;
flex-direction: column;
margin-top: 35px;

button{
	display: flex;
	height: 55px;
	width: 255px;
align-items: center;
justify-content: space-around;
border-radius: 20px;
background-color: red;
color: white;
font-size: 18px;
margin: 5px;
background-image: url(${folder});



svg{
	height: 20px;
	width: 22px;
}

}

}


${theme.breakpoints.lg}{

h1{

	padding: 25px 150px;
}


.botao{
	margin:45px auto;
	flex-direction: row;
padding: 25px;


}
}


${theme.breakpoints.xl}{
margin: auto;
	.apresentacao{
		border: 2px solid red;
		text-align: center;
		h1{
			margin: 50px auto;
width: 750px;

}

span{

border: 2px solid red;
font-size: 22px;
width: 750px;

}

	}
	.botao{
		width: 50%;
		button{
			margin: auto;
		}
	}



}






`}
`;




export const Sobre = styled.div`
${({ theme }) => css`
width: 100%;
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

height: 80px;
width: 80px;
color: gray;
border:  2px solid ${theme.colors.secundaryColor};
border-radius: 20px;
padding: 10px;
}


& :hover{
color:${theme.colors.black};

}

p{
	color: black;
}

}

.idade{

width: 250px;
height: 250px;
border:  2px dashed ${theme.colors.secundaryColor};
opacity: 0.9;
margin:  15px auto ;

 & :nth-child(1){
font-size: 80px;
left: 0px;
color: gray;
right: 1px;


 &:hover{
	color:${theme.colors.black};

}
}

}




${theme.breakpoints.lg}{

	h3,p{
padding: 2px 85px;

	};


}


${theme.breakpoints.xl}{
.icon{
		flex-direction: row;
svg{

	height: 150px;
	width: 150px;
}
}




}

`}
`;



export const Solucao = styled.div`
${({ theme }) => css`

width: 100%;
align-items: center;
text-align: center;

img{
	margin: 10px;
	height: 150px;
}

h2{

	font-size: 25px;
	padding: 15px;
	margin: 15px;
}


p{
color:gray;
font-size: 20px;
margin: 15px;

}


${theme.breakpoints.lg}{
img{
	height: 175px;
}

h2,p{
	padding: 10px  45px;
}
.solucao{
display: flex;
flex-direction: column;}
}

}


${theme.breakpoints.xl}{
h2,p{
	width: 60%;
	margin: auto;
}


.solucao{
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
text-align: center;

h2,p{
	margin: auto;

}

}

`}
`;
