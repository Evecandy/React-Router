
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import Header from './components/Header';
import Footer from './components/Footer';
// import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  

  return (
    <>
      <BrowserRouter>
        {/* header */}
        <Header />
        <Routes>
          {/* pages */}
          {/* homepage page */}
          <Route path='/' element={<Home />} />
          {/* blogs page */}
          <Route path="/blogs" element={<Blogs />} />
          {/* about page */}
          <Route path="/readmore" element={<About />} />
          {/* NotFound page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* footer */}
        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App

