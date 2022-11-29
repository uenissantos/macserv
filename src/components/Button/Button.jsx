import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Button = ({ children, click, pattern , className, type}) => {
	return (

		<Styled.ButtomContainer pattern={pattern} className={className} onClick={click} type={type} >

				{children}



		</Styled.ButtomContainer>
	)
};


Button.propTypes = {

	children: P.node,
	click: P.func,
	pattern:P.string,
	className: P.string,
	type: P.string

}
