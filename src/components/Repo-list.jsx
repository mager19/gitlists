import styled from "styled-components";
import RepoItem from "./Repo-item";

const RepoListStyled = styled.div`
	grid-area: repo-list;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 1rem;
`;

function RepoList({ search, value, repoList }) {
	let list = repoList;

	if (search !== "") {
		list = list.filter((item) => {
			return item.name.search(search) >= 0;
		});
	}
	if (value !== "all") {
		list = list.filter((item) => {
			return item.language === value;
		});
	}

	if (list.length > 0) {
		return (
			<RepoListStyled>
				{list.map((item) => {
					return <RepoItem key={item.id} {...item} />;
				})}
			</RepoListStyled>
		);
	} else {
		return <div className="message">There are not repositores</div>;
	}
}

export default RepoList;
