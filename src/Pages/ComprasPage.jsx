
import { useContext } from "react";
import { Card } from "../Components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
 
const {productos} = useContext(ProductosContext)
const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra,} = useContext(CarritoContext);

const handleAgregar = (compra) =>{
  agregarCompra(compra)
} 
const handleQuitar = (id) =>{
  eliminarCompra(id)
}
const handleAumentar = (id) =>{

}
const handleDisminuir = (id) =>{

}

  return (
    <>
      <h1>Compras:</h1>
      <hr />

      {productos.map((items) => (
        <Card
          key={items.id}
          imagen={items.image}
          titulo={items.title}
          descripcion={items.description}
          precios={items.price}
          handleAgregar={() => handleAgregar(items)}
          handleQuitar={() => handleQuitar(items.id)}
        />
      ))}
    </>
  );
};
