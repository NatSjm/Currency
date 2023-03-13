import { NavLink } from 'react-router-dom';



const Header = () => {
	return (
		<header className="w-full border-b-2 text-zinc-500">
			<div className="mx-auto px-2 md:px-4 py-5 max-w-screen-xl text-2xl font-bold">
			<NavLink
				to="/"
			>
				Logo
			</NavLink>
			</div>
		</header>
	);
};

export default Header;
