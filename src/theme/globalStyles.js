import { createGlobalStyle, css } from "styled-components";

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











.email svg {
color:#B73728;
border:2px solid #B73728


}

.whatsapp svg{
	color:#48C155;

}


h1,h2{

	color:${theme.colors.secundaryColor};
}

.divisoria{
display: flex;
flex-direction: row;
text-align: center;
padding: 20px;

.divisoria1{
	background-color: ${theme.colors.ligth};
width: 100px;
height:5px;
}

img{
height: 20px;
width: 20px;
border:none;
margin: -8px 10px 0 10px
}

}


`}
`
