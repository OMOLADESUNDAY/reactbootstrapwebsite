import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
    </div>
  );
}

export default App;
