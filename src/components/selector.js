import styled from "styled-components";
import { useState } from "react";

const SelectorStyled = styled.select`
	background: var(--button-bg);
	border: none;
	color: var(--white);
	padding-inline: 1rem;
`;

function Selector({ children, name, id, setValue }) {
	function handleChangeA(event) {
		setValue(event.target.value);
	}

	return (
		<SelectorStyled
			name={name}
			id={id}
			onChange={handleChangeA}
			defaultValue="all"
		>
			{children}
		</SelectorStyled>
	);
}

export default Selector;
