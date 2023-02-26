import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Services/Services';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GoToTop from './components/GoToTop/GoToTop';
import Error from './components/Error/Error';
function App() {
  return (
<>
<Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={ <About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
        <GoToTop/>
        <Footer />
      </Router>
        </>
  );
}

export default App;
