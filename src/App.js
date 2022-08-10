import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [allCountry, setAllCountries] = useState([]);

  useEffect(() => {
    const url = 'https://restcountries.com/v2/all'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAllCountries(data)
      })
  }, [])

  return (
    <div className="App">
      <h3>Country input form</h3>

      <div className="input-group mb-3 w-50" >

        <select className="form-select" id="inputGroupSelect01" defaultValue>
          <option value="">Select country</option>
          {
            allCountry.map(country => <option key={country.numericCode} value={country.name}>{country.name}</option>)
          }

        </select>
      </div>

    </div>
  );
}

export default App;
