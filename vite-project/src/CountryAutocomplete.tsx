import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchCountries, selectCountry } from './redux/slices/countriesSlice';

interface Country {
  code: string;
  name: string;
}

interface CountryAutocompleteProps {
  register: any;
}

/*const CountryAutocomplete: React.FC<CountryAutocompleteProps> = () => {
  const dispatch = useDispatch();
  const countries: Country[] = useSelector(selectCountry);
console.log(countries)
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <select >
      {countries.map((country: Country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountryAutocomplete;*/
