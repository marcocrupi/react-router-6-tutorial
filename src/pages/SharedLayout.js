import { Link, Outlet } from "react-router-dom";
import Navbar from "../final/components/Navbar";
import StyledNavbar from "../final/components/StyledNavbar"

const SharedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}

      {/* Usa i NavLink. Un <NavLink> è un tipo speciale di <Link> che sa se è "attivo" o meno. 
      Ciò è utile quando si crea un menu di navigazione come un breadcrumb o un insieme di schede in cui 
      si desidera mostrare quale di esse è attualmente selezionata. */}
      <StyledNavbar />

      {/* Permette di condividere il layout dei componenti annidati, 
        in questo caso <Outlet /> farà apparire il contenuto di <About> e <Products> */}
      <Outlet />
    </>
  );
};
export default SharedLayout;
