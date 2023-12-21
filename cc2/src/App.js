import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { Route, Routes } from 'react-router-dom'
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
// import Fund from "./Pages/Fund";

function App() {
   return (
      <>
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />

         </Routes>
         {/* <Fund /> */}
         <Footer />
      </>
   );
}

export default App;
