// import logo from './logo.svg';
// import './App.css';
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {Route , Routes} from 'react-router-dom'
function App() {
  return (
    <>
     <Nav/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </>
  );
}

export default App;
