import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/contactPage";
import CheckOutPage from "./pages/CheckOutPage";
import CommonLayout from "./Components/CommonLayout";
function App() {
  return (
    <Routes>
        <Route path="/" element={<CommonLayout />} >
        <Route path="/home" element={<HomePage />} />
        <Route path="/product-list" element={< ProductListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Route>

    </Routes>
  )
}

export default App
