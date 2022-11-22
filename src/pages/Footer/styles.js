import styled, { css } from 'styled-components';

export const Footer = styled.div`
${({ theme }) => css`

width: 100%;
height: ${theme.sizes.medium};
background-color:#d8d2ca;
display: flex ;
flex-direction: row;
	padding: 21px;

img{
height: 100%;
width: 10%;
display: none;
}


p{
	font-size: 8px;
}


span{
	font-size: 11px;

}
`}
`;
