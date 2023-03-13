import { createContext, useState, useMemo, useCallback } from "react";
import { getCurrencies } from '../../utils/getCurrencies';
import { reformatNumbers } from './reformatNumbers';




export const CurrenciesContext = createContext(null);

const CurrenciesProvider = ({ children }) => {
  const [currenciesList, setCurrenciesList] = useState([]);
  const [error, setError] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

    const getCurrenciesList = useCallback(async() =>  {
        setIsLoading(true);
        try {
            const result = await getCurrencies();
            const resultToLocaleString = reformatNumbers(result);
            setCurrenciesList(resultToLocaleString);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);




  const currenciesValue = useMemo(() => ({
      currenciesList,
      getCurrenciesList,
      error,
      isLoading
  }),[currenciesList, getCurrenciesList, error, isLoading]);

  return (
    <CurrenciesContext.Provider
      value={currenciesValue}
    >
      {children}
    </CurrenciesContext.Provider>
  );
};
export default CurrenciesProvider;
