import styled from "styled-components";
import Language from "./language";
import Icon from "./icon";

const RepoItemStyled = styled.div`
	gap: 1rem;
	padding: 1rem 0;
	border-block-end: 1px solid var(--grey);
	display: flex;
	flex-direction: column;

	&:last-child {
		border-block-end: none;
	}
	.title {
		display: flex;
		gap: 1rem;
		margin: 0;
		a {
			color: var(--primary);
			text-decoration: none;
		}
	}
	.public {
		border: 1px solid var(--grey);
		border-radius: 0.5rem;
		font: var(--caption-regular);
		padding: 0.125rem 0.5rem;
		letter-spacing: 1px;
	}

	.description {
		margin: 0;
		font: var(--body2-regular);
	}

	.topicList {
		display: flex;
		gap: 0.25rem;
	}

	.topicItem {
		background: var(--white);
		border-radius: 2rem;
		color: var(--black);
		font: var(--caption-medium);
		padding-inline: 0.75rem;
		padding-block: 0.25rem;
	}
	.details {
		display: flex;
		gap: 1rem;
		font: var(--caption-regular);
	}

	.details-item {
		align-items: center;
		display: flex;
		gap: 0.5rem;
		color: var(--grey-1);
		& span:first-letter {
			text-transform: capitalize;
		}
	}
`;

function RepoItem(props) {
	const updateAt = new Date(props.updated_at);
	const today = new Date();
	const diffMilliseconds = updateAt - today;
	const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
	const timeAgo = new Intl.RelativeTimeFormat("es").format(diffDays, "days");
	return (
		<RepoItemStyled className="item">
			<h3 className="title">
				<a href={props.html_url}>{props.name}</a>
				{!props.private ? <span className="public">Public</span> : null}
			</h3>

			{props.description ? (
				<p className="description">{props.description}</p>
			) : null}
			{props.topics.length ? (
				<div className="topicList">
					{props.topics.map((item, index) => (
						<span className="topicItem" key={index}>
							{item}
						</span>
					))}
				</div>
			) : null}

			<div className="details">
				{props.language ? <Language name={props.language} /> : null}
				<span className="details-item">
					<Icon name="star" />
					<span>{props.stargazers_count}</span>
				</span>

				<span className="details-item">
					<Icon name="branch" />
					<span>{props.forks_count}</span>
				</span>

				<span className="details-item">
					<span>{timeAgo}</span>
				</span>
			</div>
		</RepoItemStyled>
	);
}

export default RepoItem;
