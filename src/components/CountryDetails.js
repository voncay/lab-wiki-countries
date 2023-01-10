import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';

const CountryDetails = () => {

  let location = useLocation()
  console.log(location, "location")
  console.log(location.state.countriesData, "location countriesData")
  const countries = location.state.countriesData
  const countriesData = location.state.countriesData // for location recursion
  console.log(countries, "countries")

  const navigate = useNavigate();

  let { countryID } = useParams();
  const countryData = countries && countries.find((e) => e.alpha3Code === countryID);
  const courtryBorders = countryData.borders

  console.log(countryID, "countryID")
  console.log(countryData, "countryData")
  console.log(courtryBorders, "courtryBorders")

  return(
    <div className="col-7">
      <div style={{ textAlign: 'center' }}>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`} alt={`${countryData.name.common}'s flag`}/>
        <h5>{countryData.name.common}</h5>
        <button onClick={ () => navigate('/')}>Home</button>
      </div>
      <table className='table'>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{countryData.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{`${countryData.area} km`}<sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              { countryData.borders.length !== 0 ?
              <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                { countryData.borders.map( (e, i) => {
                  return(
                    <div key={i}>
                      <li>
                        <Link to={`/${e}`} state={{countriesData}}>
                          {countries.find((el) => el.alpha3Code === e).name.common}
                        </Link>
                      </li>
                    </div>
                  )
                })}
              </ul>:
              <>No borders</>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails