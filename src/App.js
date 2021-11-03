
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css';
import Ciudad from './Components/Ciudad';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Iron from './Components/Iron';
import Navbar from './Components/Navbar';
import PropiedadPorTipo from './Components/PropiedadPorTipo';
import Quartz from './Components/Quartz';
import Resultado from './Components/Resultado';
import SinglePropiedad from './Components/SinglePropiedad';
import Team from './Components/Team';
import SearchState from './Context/SearchState';


function App() {

 
  return (
    <>
    <SearchState>

      <Router>
<Navbar/>
<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/resumen/propiedad/:id" component={SinglePropiedad}/>
<Route exact path="/resultado/:ciudad" component={Ciudad}/>
<Route exact path="/filter/:ciudad/:tipo/:categoria" component={Resultado}/>
<Route exact path="/equipo" component={Team}/>
<Route exact path="/franquicia/iron" component={Iron}/>
<Route exact path="/franquicia/quartz" component={Quartz}/>
<Route exact path="/tipoPropiedad/:tipo" component={PropiedadPorTipo}/>
</Switch>
<Footer/>
</Router>
    </SearchState>
    </>
  );
}

export default App;


