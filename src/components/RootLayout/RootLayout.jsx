import Header from '../Header';

function RootLayout({ children }) {
	return (
		<>
			<Header />
			<main className="py-4 px-2 md:px-4 mx-auto max-w-screen-xl">{children}</main>
		</>
	);
}

export default RootLayout;
