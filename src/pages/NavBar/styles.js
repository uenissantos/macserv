import styled, { css } from 'styled-components';





export const NavBar = styled.nav`
${({ theme, stateButton }) => css`
width: 100%;
height: ${theme.sizes.big};

/* background-color: #d8d2ca;
 */

background-color: white;
display: flex;
flex-direction: row;
flex-basis: auto;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 90;
img{
height: 100%;
width: 10rem;

}



.icones{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 120px;
	height: ${theme.sizes.big};



}


a{
	height: 100%;
width:50px;
padding: 10px;
color:${theme.colors.black}
}


svg{

	height: 100%;
	width: 100%;
	right: 100px;
}

button{
	height: 90%;
	margin: 5px;
width:50px;
border: none;
background-color: transparent;
}

ul{
	border-radius: 10px;

	background-color:white;
	transition: 1s ;
	position: absolute;
	top: 7rem;
display: flex;
right:${stateButton ? '0' : '-40rem'} ;

width: 50vw;
height: 50vh;
flex-direction: column;
justify-content: space-evenly;
align-items:center;
	a{
		font-size: 20px;
			}



	img{
		height:60px;
object-fit: contain;
width: 100%;
	}



}

${theme.breakpoints.lg}{
button{
	display: none;
}


svg{
position: fixed;
bottom: 10vh;
height: 70px;
left: 40%;

}

	ul{
		flex-direction: row;
position: relative;
		top: 0px;
		left: 0;
		width: 100%;
		height: 35px;
		transition: 0s;

img{
	display: none;
}

	}



}

`}
`;

