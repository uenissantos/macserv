import styled, { css } from 'styled-components';





export const NavBar = styled.nav`
${({ theme, stateButton }) => css`
width: 100%;
height: ${theme.sizes.big};

background-color: white;
border:  2px solid red;

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
}

ul{

	transition: 2s ;
	position: absolute;
	top: 7rem;
display: flex;
right:${stateButton ? '0' : '-35rem'} ;

width: 50vw;
height: 50vh;
border: 2px solid red;
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



`}
`;

