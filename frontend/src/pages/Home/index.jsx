// import Navbar from '../../components/Navbar';
// import Carousel from '../../components/Carousel';
// import Products from '../../components/Products';
// import Footer from '../../components/Footer';

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Carousel />
//       <Products />
//       <Footer />
//     </>
//   );
// }

// export default Home;
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import ProductInfo from '../../components/Products/ProductInfo';

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      
      {selectedProduct ? (
        <ProductInfo product={selectedProduct} onBack={handleBackToProducts} />
      ) : (
        <>
          <Carousel />
          <Products onProductClick={handleProductClick} />
        </>
      )}
      
      <Footer />
    </>
  );
}

export default Home;
