import styled, { css } from 'styled-components';
import folder from '../../assets/folder.jpg'
export const Footer = styled.div`
${({ theme }) => css`
background-image: url(${folder});
width: 100%;
height: ${theme.sizes.medium};
display: flex ;
flex-direction: row;
	padding: 21px;
	color:white;
	text-align: center;
	align-items: center;
img{
height: 4rem;
width: 8rem;
display: none;
}


p{
	font-size: 15px;
	margin: auto;
}


span{
	font-size: 20px;

}


${theme.breakpoints.lg}{
img{
	display: flex;
}

p{
	font-size: 20px;
}

span{
	font-size: 22px;
}
}



`}
`;
