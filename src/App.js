import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [allCountry, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    const url = 'https://restcountries.com/v2/all'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        setAllCountries(data)
      })
  }, [])

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);


  }

  useEffect(() => {
    const url2 = `https://restcountries.com/v2/name/${selectedCountry}`;
    fetch(url2)
      .then(res => res.json())
      .then(data => {
        setCountryData(data[0])
        console.log(data[0]);

      })
  }, [selectedCountry])

  return (
    <div className="App">
      <h3>Country input form</h3>

      <div className="input-group mb-3 w-50 ms-5" >

        <select className="form-select" id="inputGroupSelect01" onChange={handleChange} defaultValue>
          <option value="">---Select your country---</option>
          {
            allCountry.map(country => <option key={country.numericCode} value={country.name || ''}>{country.name}</option>)
          }

        </select>

      </div>
      <img src={countryData.flag} alt="" style={{ width: '80px', height: '30px',border:'1px solid black' }} />
       <p>+ {countryData.callingCodes[0]}</p>
      <input className="form-control w-50 ms-5" type="tel" name="" id="" />
    </div>
  );
}

export default App;
