import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const TextArea = ({ name, placeholder ,onchange }) => {
	return (

		<Styled.TextAreaContainer
			name={name}
			placeholder={placeholder}
			onChange={onchange}
		>

		</Styled.TextAreaContainer>
	)
};


TextArea.propTypes = {

	name: P.string.isRequired,
	placeholder: P.string
}
