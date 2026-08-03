import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductListPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductDetailsPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ product-list" element={< ProductListPage />} />
      <Route path="/ product-details" element={<ProductDetailsPage />} />
      <Route path="/ blog" element={<BlogPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
