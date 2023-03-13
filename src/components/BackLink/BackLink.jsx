import { Link } from "react-router-dom";

const BackLink = ({ link, label }) => {
	return (
		<Link className="leading-none text-blue-400" to={link || '/'}>
			<span className="inline-block align-middle pb-0.5 mr-0.5">{'<'}</span>
			<span className="inline-block align-middle">{ label || 'Zpět' }</span>
		</Link>
	)
};

export default BackLink;
