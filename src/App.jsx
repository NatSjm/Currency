import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencyDetailPage from './pages/CurrencyDetailPage';
import CurrenciesPage from './pages/CurrenciesPage';
import CurrenciesProvider from './components/CurrenciesProvider/CurrenciesProvider';
import RootLayout from './components/RootLayout';


const App = () => {
	return (
		<CurrenciesProvider>
			<BrowserRouter>
				<RootLayout>
					<Routes>
						<Route path="/" exact element={<CurrenciesPage/>}/>
						<Route path="/:slug" element={<CurrencyDetailPage/>}/>
					</Routes>
				</RootLayout>
			</BrowserRouter>
		</CurrenciesProvider>
	);
};


export default App;
