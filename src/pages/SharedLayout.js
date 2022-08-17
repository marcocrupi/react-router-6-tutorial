import { Link, Outlet } from "react-router-dom";
import Navbar from "../final/components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />

      {/* Permette di condividere il layout dei componenti annidati, 
        in questo caso <Outlet /> farà apparire il contenuto di <About> e <Products> */}
      <Outlet />
    </>
  );
};
export default SharedLayout;
