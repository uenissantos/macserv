import styled, { css } from 'styled-components';
import folder from '../../assets/folder.jpg'



export const Service = styled.div`


${({ theme }) => css`

margin-top:${theme.sizes.medium} ;
text-align: center;
align-items: center;
padding: 10px;
overflow: hidden;



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
justify-content:space-evenly;
overflow: hidden;
height: 115vh;
}

h2{
	width: 400px;
}

.images{
	display: grid;
grid-template-columns: 1fr;
background:url(${folder});
background-size:100% 100% ;
background-repeat: no-repeat;

img{
height: 150px;
width: 150px;
}


}

${theme.breakpoints.xl}{


	.images{

			grid-template-columns: 1fr  1fr;
			img{
				height: 250px;
width: 250px;

			}

	}
}


${theme.breakpoints.lg}{

}


`}
`;
