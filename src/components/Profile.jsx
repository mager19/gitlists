import styled from "styled-components";
// import props from "./profile-data";
import Button from "./button";
import Icon from "./icon";

const ProfileStyled = styled.div`
	grid-area: profile;

	@media screen and (max-width: 480px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto 1fr;
		grid-template-areas: "profile__container profile__container" "bio__container bio__container" "buttons buttons";
	}

	.profile__container {
		grid-area: profile__container;

		@media screen and (max-width: 480px) {
			display: flex;
			gap: 1rem;
		}

		@media screen and (min-width: 768px) {
			flex-direction: column;
		}
	}

	.avatar {
		border: 1px solid var(--grey-1);
		border-radius: 50%;
		box-sizing: border-box;
		margin-block-end: 1.5rem;
		overflow: hidden;

		height: 100px;
		width: 100px;
	}

	.name {
		color: var(--white);
		font: var(--headline1);
		margin: 0;
		margin-block-end: 0.5rem;
	}

	.username {
		font: var(--headline2-ligth);
		margin-block: 0.5rem;
		margin-block-end: 1.5rem;
	}

	.info {
		align-items: center;
		display: flex;
		color: var(--grey-1);
		font: var(--body2-semi-bold);
		gap: 0.5rem;
		margin-block: 1rem;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.buttons {
		display: flex;
		gap: 0.5rem;
		margin-block-end: 1.5rem;
	}

	.buttons {
		grid-area: buttons;
	}

	.bio__container {
		grid-area: bio__container;
	}
`;

function Profile(props) {
	const {
		name,
		login,
		avatar_url,
		bio,
		followers,
		following,
		location,
		blog,
		twitter_username,
	} = props;

	return (
		<ProfileStyled>
			<div className="profile__container">
				<div>
					<img
						src={avatar_url}
						alt=""
						width="278px"
						height="278"
						className="avatar"
					/>
				</div>
				<div className="infoUser">
					<p className="name">{name}</p>
					<p className="username">{login}</p>
				</div>
			</div>
			<div className="buttons">
				<Button text="Follow" link="#" className="custom" />
				<Button
					text="Sponsors"
					icon={<Icon name="home" color="grey" />}
				/>
			</div>
			<div className="bio__container">
				<p className="bio info">{bio}</p>
				<p className="followers info">
					{followers} <span>Followers</span> <span>.</span>
					{following}
					<span>Following</span>
				</p>
				<p className="location info">{location}</p>
				<a
					className="info"
					href={blog}
					target="_blank"
					rel="noreferrer"
				>
					{blog}
				</a>
				<a
					className="info"
					href={`https://twitter.com/${twitter_username}`}
					target="_blank"
					rel="noreferrer"
				>
					@{twitter_username}
				</a>
			</div>
		</ProfileStyled>
	);
}

export default Profile;
