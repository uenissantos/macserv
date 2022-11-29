import styled, { css } from 'styled-components';
import folder from '../../assets/folder.jpg'

import t from '../../assets/t.jpg'

export const FirstPage = styled.div`
${({ theme }) => css`
width: 100%;
height: 90vh;
text-align: center;
margin-top: ${theme.sizes.medium};
background-image:url(${t}) ;
background-repeat: no-repeat;
background-size: cover;



.apresentacao{
	width: 100%;
height: 90vh;
padding: 25px;
background-color: white;
opacity: 0.8;
align-items: center;
text-align: center;


h1{

	margin: 20px  10px;
	max-width: 800px;
}

.subTitle{
	margin: auto;
min-width: 300px;
max-width: 700px;
	span{
	font-size: 20px;
	margin: 25px  5px;
	color:black;

}
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
color: white;
font-size: 18px;
letter-spacing: 2px;
margin: 5px;
background-image: url(${folder});



svg{
	height: 40px;
	width: 42px;
	margin: 10px;
}

}

}


${theme.breakpoints.lg}{
height: 60vh;

.apresentacao{
	height: 60vh;
}

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
		text-align: center;
		h1{
			margin: 40px auto;
		}
.subTitle{

margin: 1px auto;

}
	}
	.botao{
		background-color: transparent;
		margin: 10px auto;

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
	margin: 2rem  1px;
	padding: 5px;

}

h3{

color: ${theme.colors.black};
font-size: 22px;
 min-width: 300px;
 max-width: 600px;
margin: 1px auto;
}

p{
	color: gray;
	font-size: 20px ;
min-width: 200px;
 max-width: 350px;
 padding: 15px;
};

.icon{
	margin: 20px;

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



.carousel{
h2{
	width:80% ;
	margin: 25px auto;
}


.item{
	background-color: ${theme.colors.ligth};

border: 2px solid gray;
border-radius: 20px;
margin: 20px;
overflow: hidden;
height: 10vh;

svg{
height: 100%;
width: 100%;
border-radius: 50px;

}
p{
	font-size: 18px;
	color:white;
	margin: 1px auto;
	width: 2vw;
}
}

}





${theme.breakpoints.lg}{

h2{
	width: 300px;
	margin-left: 25px;
}

	h3,p{
padding: 2px 85px;
max-width: 800px;
	};

	.carousel{

.item{
width: 20vw;
}
}
}


${theme.breakpoints.xl}{


h2{
	width: 600px;
	margin:4rem auto;
}

h3{
	margin: 20px auto;
}


p{
	width: 800px;
	margin: 0px auto;
}

.icon{
	width: 800px;
		flex-direction: row;
		margin: 10px auto;

 & p{
	margin: 25px auto;
     width: 300px;
	letter-spacing: 5px;
}


svg{

	height: 110px;
	width: 100px;
	margin: 0 auto;
}





}

.carousel{

width:80%;
margin: 25px auto;
.item{
	border: 2px  solid ${theme.colors.secundaryColor};

height: 10vw;
width: 18vw;
svg{
height: 70%;

}

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



.carousel{
h2{
	width:80% ;
	margin: 25px auto;
}
span{
font-size: 20px;
letter-spacing: 2px;
margin-right: 40%;

}

.item{
	background-color: ${theme.colors.ligth};

border: 2px solid gray;
border-radius: 20px;
margin: 20px;
overflow: hidden;
height: 10vh;

svg{
height: 100%;
width: 100%;
border-radius: 50px;

}
p{
	font-size: 18px;
	color:white;
	margin: 1px auto;
	width: 2vw;
}


}

}



${theme.breakpoints.lg}{
img{
	height: 175px;
}
h2{
	width: 600px;
	margin: 25px auto ;
}

h2,p{
	padding: 10px  45px;
}
.solucao{
display: flex;
flex-direction: column;}
}




.carousel{

.item{
width: 20vw;
}
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



.carousel{

width:80%;
margin: 25px auto;
.item{
	border: 2px  solid ${theme.colors.secundaryColor};

height: 10vw;
width: 18vw;
svg{
height: 70%;

}

}
}

`}
`;









/*

${theme.breakpoints.lg}{
.caroucel{
h2{

width: 300px;
margin-left: 25px;



}

.item{

		svg{
height: 50%;
width: 50%;

}
}
}


}



${theme.breakpoints.xl}{

.caroucel{
h2{

width: 400px;
letter-spacing: 15px;
margin-left: 50px;
margin-top: 50px;
font-size: 22px;

}

.item{
justify-content: center;
align-items: center;
color: white;
width: 60%;
	svg{
height: 40%;
width: 40%;
color: black;
}
}


}



 */
