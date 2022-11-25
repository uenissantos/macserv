import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Form = ({
	children ,
	onSubmit,
	classe,
	action,
	id,
	method

}) => {
return (

<Styled.Form onSubmit={onSubmit}  className={classe} action={action}  method={method} id={id} >
{children}
</Styled.Form>
)
};


Form.propTypes = {

children: P.node.isRequired,
onSubmit:P.func
}
