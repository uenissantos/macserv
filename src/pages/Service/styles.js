import styled, { css } from 'styled-components';
import folder from '../../assets/folder.jpg'



export const Service = styled.div`


${({ theme }) => css`

margin-top:${theme.sizes.medium} ;
text-align: center;
align-items: center;
padding: 10px;




.servicos{
display: flex;
flex-direction: column;
overflow: hidden;

}

h2{
margin: 20px auto;
}

p{
font-size: 20px;
font-weight: lighter;

}

.images{
	display: none;


}



${theme.breakpoints.lg}{
.servicos{
flex-direction: row;
justify-content:space-between;

}



.images{
	display: grid;
grid-template-columns: 1fr;
background:url(${folder});
background-size:100% 100% ;
background-repeat: no-repeat;
img{
height: 200px;
width: 200px;
margin: 10px;

}


}
}
${theme.breakpoints.xl}{

	.images{

			grid-template-columns: 1fr  1fr;

	}
}


${theme.breakpoints.lg}{
.servicos{
		justify-content:space-evenly;

}
}


`}
`;
