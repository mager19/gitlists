import { isValidElement } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
	align-items: center;
	background: var(--buttonBG);
	border-radius: 0.4rem;
	color: var(--grey-1);
	border: 1px solid var(--grey);
	cursor: pointer;
	display: inline-flex;
	font: var(--button);
	font-weight: bold;
	justify-content: center;
	gap: 0.5rem;
	min-inline-size: 135px;
	padding-block: 0.25rem;
	text-decoration: none !important;

	&:hover {
		background: var(--white);
		color: var(--button);
	}
`;

function Button({ text, link, className, icon }) {
	const component = link ? "a" : "button";
	let IconComponent = null;
	if (icon) {
		if (isValidElement(icon)) {
			IconComponent = icon;
		}
	}
	return (
		<ButtonStyled as={component} href={link} className={className}>
			{IconComponent}
			{text}
		</ButtonStyled>
	);
}

export const ButtonContrast = styled(Button)`
	background: var(--white);
	color: var(--grey);

	&:hover {
		background: var(--buttonBG);
		color: var(--white);
	}
`;

export const ButtonRounded = styled(Button)`
	background: var(--buttonBG);
	border: 2px solid var(--grey-1);
	border-radius: 50%;
	padding: 0.75rem;
	min-inline-size: initial;

	&:hover {
		background: var(--grey);
		transform: scale(1.1);
	}
`;

export default Button;
