import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
function App() {
  return (
<Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ product-list" element={< ProductListPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
