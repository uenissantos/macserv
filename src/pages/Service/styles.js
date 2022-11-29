import styled, { css } from 'styled-components';
import folder from '../../assets/folder.jpg'



export const Service = styled.div`


${({ theme }) => css`

margin-top:${theme.sizes.medium} ;
text-align: center;
align-items: center;
padding: 10px;
overflow: hidden;

/*

#items-wrapper{
width: 100vw;


}

#items{
	display: flex;
	flex-direction: row;
	overflow-x:auto;
	scroll-snap-type: x mandatory;
scroll-behavior: smooth;


	-webkit-overflow-scrolling: touch;img{
	width: 100%;
height: 100%;
object-fit: cover;
position: relative;
animation: ani 10s infinite;

}

}

@keyframes ani {
0%{left: 0vw};
50%{left:50vw};
50%{left:100vw};
80%{left: 0vw};

}

.item{
	flex:none;
	width: 350px;
	height: 400px;
scroll-snap-align:start;
pointer-events: none;


} */


.slider{
height: 350px;
img{

	height: 250px;
}

}
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

.slider{

height: 400px;

img{
	height: 300px;
}

}

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
}
${theme.breakpoints.xl}{

.slider{
	margin: 10px auto;
width: 75%;
img{
height: 400px;
width:95%;
}

}

.te{

background-color: red;
color: red;

font-size: 80px;

}
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
