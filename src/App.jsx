import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NavBar } from "./components/NavBar";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Description } from "./Pages/Description";
import { Contact } from "./Pages/Contact";

function App() {
  return (<div>
     <NavBar title={"WorldAtlas"} link2={"About"} link3={"Country"}  />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/country" element={<Country />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/description/:id" element={<Description />} />
    </Routes >
    <NavBar title={"Copyright 2024. All Right Reserved"} link2={"Social"} link3={"Source Code"} />
  </div>
  )
}

export default App;