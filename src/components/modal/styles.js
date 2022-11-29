import styled, { css } from 'styled-components';
import bannerM from '../../assets/bannerM.png'
import bannerWeb from '../../assets/bannerWeb.png'


const Sizes = {


	small: () => css`
	height:20% ;
	width:80%;
	`,
	medium: () => css`
	height:21rem ;
	width:80%;
	`,




	big: () => css`
	height:100% ;
width:100%;
	`,

}



export const ModalContainer = styled.div`
${({ theme, size }) => css`
border:3px solid ${theme.colors.ligth};
box-shadow: 5px  5px  20px  ${theme.colors.secundaryColor}   ;
${Sizes[size]};
background-image: url(${bannerM});
background-size: cover;
background-repeat: no-repeat;
margin: auto;



${theme.breakpoints.lg}{
background-image: url(${bannerWeb});

}

`}
`;
