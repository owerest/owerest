import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
// import Hacking from "./pages/trilha/hacking";
import Design from "./pages/trilha/design";
import About from "./pages/about";
import EmBreve from "./pages/other";
import NotFound from './components/NotFound';


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/trilha/hacking" element={<Hacking />} /> */}
        <Route path="/trilha/design" element={<Design />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/embreve" element={<EmBreve />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;