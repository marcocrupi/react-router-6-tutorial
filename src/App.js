import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    // <BrowserRouter> ci connette al browser
    <BrowserRouter>
      {/* Gli elementi fuori da <Routes> compaiono in tutti i <Route> */}

      {/* <Routes> è parente di tutti i <Route> */}
      <Routes>
        {/* <Route> è per ogni pagina ed ha due props path e element, 
        Nella fase di produzione / rappresenta il dominio del sito */}
        <Route path="/" element={<SharedLayout />}>
          {/* index è una route figlio senza percorso che esegue il rendering 
          nell'outlet del genitore all'URL del genitore. */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          {/* Possiamo impostare una pagina di errore in caso qualcuno
          digiti un url non previsto */}
          <Route path="*" element={<Error />} />
        </Route>

        {/* Questo si chiama "Nested Route", in questo caso possiamo
        vedere "stats" solo passando da "dashboard" */}
        <Route path="dashboard" element={<div>dashboard</div>}>
          <Route path="stats" element={<div>stats</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
