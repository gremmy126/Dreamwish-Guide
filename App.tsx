import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EntryGuide from './pages/EntryGuide';
import Presentation from './pages/Presentation';
import ServiceIntro from './pages/ServiceIntro';
import ScrollToTop from './components/ScrollToTop';
import Vision from './components/Vision';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Products from './components/Products';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isPresentation = location.pathname === '/presentation';
  const isServiceIntro = location.pathname === '/service-intro';
  const isHomePage = location.pathname === '/';

  // Adjust padding top based on page type
  // Presentation and ServiceIntro take full screen/custom layout
  if (isPresentation || isServiceIntro) {
    return <main className="h-screen w-full">{children}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isHomePage ? '' : 'pt-20'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry-guide" element={<EntryGuide />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/service-intro" element={<ServiceIntro />} />
          
          {/* Individual Pages */}
          <Route path="/vision" element={<Vision />} />
          <Route path="/problem" element={<Problems />} />
          <Route path="/solution" element={<Solutions />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;