import styled, { css } from 'styled-components';

export const TextAreaContainer = styled.textarea`
${({ theme }) => css`


border: 1px solid ${theme.colors.ligth}  ;
margin: 25px auto ;
display:block ;
border-radius:5% ;
height:${theme.sizes.huge}  ;
width: 300px;
text-align: center;
font-size: 20px;

`}
`;
