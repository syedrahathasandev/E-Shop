import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductListPage from "./pages/ProductDetailsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/contactPage";
import CheckOutPage from "./pages/CheckOutPage";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/product-list" element={< ProductListPage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
    </Routes>
  )
}

export default App
