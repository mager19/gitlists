import Layout from "./components/layout";
import Profile from "./components/Profile";
import Filter from "./components/Filter";
import RepoList from "./components/Repo-list";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { getUser, getRepos } from "./services/users";
import { useParams } from "react-router-dom";
import Modal from "./modal";

function App() {
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [modal, setModal] = useState(false);
	const [search, setSearch] = useState("");
	const [value, setValue] = useState("all");

	let params = useParams();
	let username = params.user;
	if (!username) {
		username = "mager19";
	}

	useEffect(() => {
		getUser(username).then(({ data, isError }) => {
			if (isError) {
				return;
			}
			setUser(data);
		});
		getRepos(username).then(({ data, isError }) => {
			if (isError) {
				console.log("No se encontraron repos");
				return;
			}
			setRepos(data);
		});
	}, [username]);
	return (
		<Layout>
			<Modal isActive={modal} setModal={setModal} />
			<Profile {...user} />
			<Filter
				setSearch={setSearch}
				repoListCount={repos.length}
				repoList={repos}
				setValue={setValue}
			/>
			<RepoList search={search} repoList={repos} value={value} />
			<Search setModal={setModal} />
		</Layout>
	);
}

export default App;
