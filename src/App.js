import Layout from "./components/layout";
import Profile from "./components/Profile";
import Filter from "./components/Filter";
import RepoList from "./components/Repo-list";
import Search from "./components/Search";

function App() {
	return (
		<Layout>
			<Profile />
			<Filter />
			<RepoList />
			<Search />
		</Layout>
	);
}

export default App;
