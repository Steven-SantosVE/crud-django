import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Index from './pages/Index'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Index />} />
      <Route path="/home" element={<Home />}/>
    </Routes>
  </BrowserRouter>,
)
