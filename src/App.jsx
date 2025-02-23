import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Description } from "./Pages/Description";
import { Contact } from "./Pages/Contact";
import { NotFound } from "./Pages/NotFound";
import { AppLayout } from "./Pages/AppLayout";
import { DescCard } from "./components/DescCard";

function App() {
  return (<div>
    
    <Routes>
      <Route path="/" element={<AppLayout/>} >
      <Route index element={<Home/>}/>
      <Route path="about" element={<About />} />
      <Route path="country" element={<Country />} />
      <Route path="contact" element={<Contact />} />
       <Route path="description/:name" element={<Description/>} >
       <Route index element={<DescCard/>}/>
       </Route>
      <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes >
     </div>
  )
}

export default App;