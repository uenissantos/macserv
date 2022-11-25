import styled, { css } from 'styled-components';

export const CheckBox = styled.li`
${({ theme }) => css`

display: flex;
flex-direction: row-reverse;
width: 300px;
margin: 0 190px 0 auto;

input{
 width: 30px;
height: 23px;
border-radius: 3px;

}
#indicacao,
#google,
#rede-social











${theme.breakpoints.lg}{



}

${theme.breakpoints.xmax}{

/* margin-left: 350px;
 */
}



`}
`;
