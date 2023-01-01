import styled from "styled-components";

const LanguageStyled = styled.div`
	align-items: center;
	display: flex;
	gap: 0.5rem;

	&:before {
		content: "";
		border-radius: 50%;
		inline-size: 1rem;
		block-size: 1rem;
		background: ${({ color }) => color};
	}
`;
const languages = {
	ruby: {
		color: "red",
	},
	css: {
		color: "green",
	},
	javascript: {
		color: "yellow",
	},
	html: {
		color: "peru",
	},
};

function Language({ name }) {
	const formattedName = name.toLowerCase();
	const color = languages[formattedName]
		? languages[formattedName].color
		: "white";

	return <LanguageStyled color={color}>{name}</LanguageStyled>;
}

export default Language;
