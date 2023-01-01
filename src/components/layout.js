import styled from "styled-components";

const LayoutStyled = styled.main`
	min-block-size: 100vh;
	max-inline-size: 75rem;
	padding-inline: 20px;
	margin: auto;
	padding-block: 2.5rem;
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 300px 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas: "profile filters" "profile repo-list";
		column-gap: 2rem;
	}
`;

function Layout({ children }) {
	return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
