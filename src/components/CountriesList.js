import {useEffect, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

const CountriesList = ({ setCountries }) => {

  const [countriesData, setCountriesData] = useState([])
  console.log(countriesData, "countriesData")

  const fetchCountries = async () => {
    await axios.get(`https://ih-countries-api.herokuapp.com/countries`)
    .then(res => {
        setCountriesData(res.data)
        setCountries(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchCountries();
  }, [])

  return(
    <>
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <h3>CountriesList</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Countries</th>
          </tr>
        </thead>
        <tbody>
          { countriesData.map( e => {
            return(
              <tr key={e._id}>
                <td>
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`} alt=""/>
                  <Link to={`/${e.alpha3Code}`} state={{ countriesData }} >
                    <p>{e.name.common}</p>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    <Outlet />
    </>
  )
}

export default CountriesList