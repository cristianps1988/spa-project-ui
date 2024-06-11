import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ScrollTop } from "./helpers/ScrollTop";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Loader, WspButton } from "./components/";
import { useProductsStore } from "./hooks/useProductsStore";
import { useAuthStore } from "./hooks";
import { useProductFormStore } from "./hooks/useProductFormStore";
const HomePage = lazy(() => import("./pages/HomePage"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Servicios = lazy(() => import("./pages/Servicios"));
const Contact = lazy(() => import("./pages/Contact"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Error = lazy(() => import("./pages/Error"));
const ProductModal = lazy(() => import("./components/ProductModal"))

function App() {
  const { startLoadingProduct, activeProduct } = useProductsStore()
  const { startLoadingCategories, startLoadingGenders } = useProductFormStore()
  const { status } = useAuthStore()

  useEffect(() => {
    startLoadingProduct()
  }, [])

  useEffect(() => {
    startLoadingCategories()
  }, [])

  useEffect(() => {
    startLoadingGenders()
  }, [])


  if (status === 'checking') {
    return <Loader />
  }

  return (
    <Suspense fallback={<Loader />}>
      {activeProduct && <ProductModal />}
      <WspButton />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contact />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/login" element={(status === 'authenticated')
          ?
          <Navigate to="/" />
          :
          <LoginPage />
        } />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </Suspense>

  )
}

export default App
