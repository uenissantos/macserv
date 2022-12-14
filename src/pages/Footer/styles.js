import styled, { css } from 'styled-components';
import folder from '../../assets/folder.jpg'
export const Footer = styled.div`
${({ theme }) => css`
background-image: url(${folder});
width: 100%;
height: ${theme.sizes.big};
display: flex ;
flex-direction: row;
	padding: 21px;
	color:white;
	text-align: center;
	align-items: center;



p{
	font-size: 15px;
	margin:5px auto;
}


span{
	font-size: 20px;

}


${theme.breakpoints.lg}{
	height: ${theme.sizes.small};

p{
	font-size: 20px;
}

span{
	font-size: 22px;
}
}



`}
`;
