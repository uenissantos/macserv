import { createGlobalStyle, css } from "styled-components";
import folder from '../assets/folder.jpg'

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`

*{
	margin:0 ;
	padding:0 ;
	box-sizing:border-box ;
	font-size:62.5% ;

}


li{
	list-style-type:none;

}
a{
	text-decoration: none;

}




.list svg {
color:white;


}


.email svg {
color:#B73728;
border:2px solid #B73728


}

.whatsapp svg{
	color:#48C155;

}


h1,h2{
	background-image:url(${folder});

	color:${theme.colors.secundaryColor};
}


h1,h2,h3,h4,h5,h6{
	letter-spacing: 4px;

}
span,p{
	letter-spacing: 2px;

}


`}
`
