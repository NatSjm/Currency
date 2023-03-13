import BackLink from "../BackLink";

const Page = ({ children, ...props }) => {
	const { title, subtitle, backLinkProps = null } = props;
	return (
		<div>
			{ backLinkProps && <BackLink {...backLinkProps}/>}
		<h1 className="pt-3 font-bold text-center text-4xl">{title || ''}</h1>
			{ subtitle && <h1 className="pt-3 font-bold text-center text-2xl text-zinc-500">{subtitle}</h1>}
			{ children }
		</div>
	)

};

export default Page;
