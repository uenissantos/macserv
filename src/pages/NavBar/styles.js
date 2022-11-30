import styled, { css } from 'styled-components';
import folder from '../../assets/folder.jpg'




export const NavBar = styled.nav`
${({ theme, stateButton }) => css`
width: 100%;
height: ${theme.sizes.medium};

/* background-color: #d8d2ca;
 */
/* background-image: url(${folder});
background-size: contain; */
background-color: white;
display: flex;
flex-direction: row;
flex-basis: auto;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 90;

.imageNav{
	margin: 10px;
display: flex;
	img{
height: 45px;
background-color: white;
}
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
color:white;
font-size: 18px;
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

	background-image: url(${folder});
	background-repeat: no-repeat;
	border-radius: 10px;
	transition: 1s ;
	position: absolute;
	top: 7rem;
	background-size: 100% 100%;

display: flex;
right:${stateButton ? '0' : '-40rem'} ;

width: 50vw;
height: 50vh;
flex-direction: column;
justify-content: space-around;
align-items:center;

li{
	width: 150px;
}


	img{
		height:60px;
object-fit: contain;
width: 100%;
background-color: white;
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
width: 70px;
right: 10px;


}



	ul{
		background-image: url('');
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

a{

	color: black;

	&:hover{

		border-bottom: 2px solid gray;
	}
}

	}

}



${theme.breakpoints.xl}{

	.imageNav{

img{
	height: 55px;
}
	}


}





`}
`;

