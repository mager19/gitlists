import Heart from "./heart";
import Twitter from "./twitter";
import Arrowdown from "./arrowdown";
import Book from "./book";
import Branch from "./branch";
import Cancel from "./cancel";
import Github from "./github";
import Home from "./home";
import Star from "./star";
import Search from "./search";
import User from "./user";

function Index({ name, ...props }) {
	switch (name) {
		case "heart": {
			return <Heart {...props} />;
		}
		case "twitter": {
			return <Twitter {...props} />;
		}
		case "arrowDown": {
			return <Arrowdown {...props} />;
		}
		case "book": {
			return <Book {...props} />;
		}
		case "branch": {
			return <Branch {...props} />;
		}
		case "cancel": {
			return <Cancel {...props} />;
		}
		case "github": {
			return <Github {...props} />;
		}
		case "home": {
			return <Home {...props} />;
		}
		case "star": {
			return <Star {...props} />;
		}
		case "search": {
			return <Search {...props} />;
		}
		case "user": {
			return <User {...props} />;
		}
		default: {
			return null;
		}
	}
}

Index.defaultProps = {
	color: "white",
	size: 16,
};

export default Index;
