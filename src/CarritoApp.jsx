import { Navigate, Route, Routes } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { ComprasPage } from "./Pages/ComprasPage";
import { CarritoPage } from "./Pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Nav></Nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage />}></Route>
            <Route path="/carrito" element={<CarritoPage />}></Route>
            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
};
