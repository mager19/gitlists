import styled from "styled-components";
import InputText from "./input-text";
import SelectorStyled from "./selector";
import Separator from "./separator";
import { useState } from "react";

const FilterStyled = styled.div`
	grid-area: filters;
	.count{
		color:var(--white)
		font:var(--headline2-semibold);
		margin-block-end:1.5rem;
	}
	.action-list{
		display:flex;
		gap:1rem;

		@media screen and (max-width: 480px) {
			flex-direction:column;
		}
	}

	.select-list{
		display:flex;
		gap:0.5rem;

		@media screen and (max-width: 480px) {
			margin-block-start:1rem;
		}
	}
`;

function Filter({ repoListCount = 100, setSearch, setValue, repoList }) {
	function handleChange(event) {
		setSearch(event.target.value);
	}

	let options = repoList.map((item) => {
		return item.language;
	});

	options = [...new Set(options)];

	return (
		<FilterStyled>
			<h2 className="count">Repositorios {repoListCount}</h2>
			<div className="action-list">
				<InputText
					type="search"
					placeholder="Busca un Repo"
					onChange={handleChange}
				/>

				<div className="select-list">
					<SelectorStyled setValue={setValue}>
						<option value="all">All</option>
						<option value="forks">Forks</option>
					</SelectorStyled>

					<SelectorStyled
						setValue={setValue}
						optionsList={options}
						name="All Languages"
					>
						<option value="all">All Lenguages</option>
						{options.map((item, index) => {
							if (item !== null) {
								return <option key={index}>{item}</option>;
							}
						})}

						{/* <option value="all">All Languages</option>
						<option value="Ruby">Html</option>
						<option value="css">Css</option>
						<option value="JavaScript">Javascript</option> */}
					</SelectorStyled>

					<SelectorStyled setValue={setValue}>
						<option value="order" disabled>
							Order By
						</option>
						<option value="stars">Stars</option>
					</SelectorStyled>
				</div>
			</div>
			<Separator />
		</FilterStyled>
	);
}

export default Filter;
