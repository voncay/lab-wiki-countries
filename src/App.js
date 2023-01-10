// import './App.css';
import Navbar from './components/Navbar'
import{Routes, Route} from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
      <div className='row'>
      <Routes>
        <Route path="/" element={<CountriesList />}>
          <Route path="/:countryID" element={<CountryDetails />}/>
        </Route>
      </Routes>
      </div>
      </div>
    </div>
  )
}

export default App;
