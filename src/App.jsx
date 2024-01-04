import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./contexts/ProductosProvider"
import { CarritoProvider } from "./contexts/CarritoProvider"

export const App = () => {

  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage />}></Route>
            <Route path="/carrito" element={<CarritoPage />}></Route>
            <Route path="/*" element={<Navigate to={'/'}/>}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}