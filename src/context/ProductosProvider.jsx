import { ProductosContext } from "./ProductosContext";
import { useEffect, useState } from "react";

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const fetchPreductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    fetchPreductos();
  }, []);

  return (
    <ProductosContext.Provider  value={{ productos }}>
      
      {children}

    </ProductosContext.Provider>
  );
};
