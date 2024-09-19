import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import Banner from './components/banner/banner';
import BannerThree from './components/bannerThree/bannerThree';
import BannerTwo from './components/bannerTwo/bannerTwo';
import BestSellers from './components/bestSellers/bestSellers';
import DownloadApp from './components/downloadApp/downloadApp';
import Footer from './components/footer/footer';
import HealthyLife from './components/healthyLife/healthyLife';
import Navbar from './components/navBar/navbar';
import ShopByCategory from './components/shopByCategory/shopByCategory';
import TopOffers from './components/topOffers/topOffers';
import WhyMedPlus from './components/whyMedPlus/whyMedPlus';
import Cart from './components/cart'; 
import Pharmacy from './components/shopByCategory/pharmacy';
import Diagnosis from './components/shopByCategory/diagnosis';
import Doctor from './components/shopByCategory/doctor';
import MedplusAdvantage from './components/shopByCategory/medplusAdvantage';
import MedplusFactory from './components/shopByCategory/medplusFactory';
import ProductDetails from './components/topOffers/productDetails';

import ProductDetailss from './components/bestSellers/bestsellerDetails';

const AppLayout = () => {
  const location = useLocation();
  const showFooterAndDownloadApp = location.pathname !== '/cart';

  return (
    <>
      <Navbar />        
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <ShopByCategory />
            <TopOffers />
            <BannerTwo />
            <BestSellers />
            <BannerThree />
            <WhyMedPlus />
            <HealthyLife />
          </>
        } />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/pharmacy" element={<Pharmacy />} /> 
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/doctor" element={<Doctor />} /> 
        <Route path="/medplusAdvantage" element={<MedplusAdvantage />} />
        <Route path="/medplusFactory" element={<MedplusFactory />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/productDetails/:id" element={<ProductDetailss />} />
      </Routes>
      {showFooterAndDownloadApp && (
        <>
          <DownloadApp />
          <Footer />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
