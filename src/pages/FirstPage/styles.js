import styled, { css } from 'styled-components';

export const FirstPage = styled.div`
${({ theme }) => css`
width: 100%;
border: 2px solid red;
display: flex;
flex-direction: column;
align-items: center;


.carrossel >p{
bottom:25px;
	position: absolute;
	font-size: 25px;
	z-index: 1;
	color: ${theme.colors.black};
	border: 2px solid red;


}

.carrossel{

 & img{
	height: 250px;

}

}

.somos{
display: flex;
flex-direction: column;
align-items: center;
background-color:#d8d2ca;


}
p{
padding:20px 20px  0px 20px;
max-width: 355px;
font-size: 16px;

}




.projetos{
	background-color:#d8d2ca;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
width: 100%;
svg{
	margin-top: 40px;

height: 100px;
width: 100px;
padding: 20px;
border-radius: 50px;
border: 2px solid ${theme.colors.ligth};
color:${theme.colors.secundaryColor} ;
:hover{
	background-color: ${theme.colors.black};
	color: ${theme.colors.ligth};
}

}


p{

	margin-bottom: 20px;
}

}


.title-grid{
text-align: center;
h2{
	padding: 20px;
	width: 350px;
	margin: auto;
}


}


.grid-container{
	background-color:#d8d2ca;
display: grid;
grid-template-columns: 1f;
gap:10px;
text-align: center;
width: ;

}

.iten1,
.iten2,
.iten3,{
img{

width:90%

}

}




${theme.breakpoints.lg}{
.somos{
	width: 600px;

	p{
		padding: 10px;
	}
}


	.projetos{
		flex-direction:row;
		margin: 20px;
		width: 600px;
	}


	.grid-container{
		grid-template-columns: 1fr 1fr;
	}

}


${theme.breakpoints.xl}{

	.carrossel{

& img{
    height: 550px;
object-fit: cover;
}

}

	.grid-container{
		grid-template-columns: 1fr 1fr  1fr;
	}



`}
`;
