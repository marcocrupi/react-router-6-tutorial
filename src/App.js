import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";


function App() {
  return (
    // <BrowserRouter> ci connette al browser
    <BrowserRouter>
      {/* <Routes> è parente di tutti i <Route> */}
      <Routes>
        {/* <Route> è per ogni pagina ed ha due props path e element, 
        Nella fase di produzione / rappresenta il dominio del sito */}
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
