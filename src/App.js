import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Experience from './component/Experience';
import Works from './component/Works';
import Testimonies from './component/Testimonies';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Experience/>
      <Works/>
      <Testimonies/>
    </div>
  );
}

export default App;
