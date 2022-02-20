import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';

function Catalog() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <ProductCard />
      </div>
    </>
  );
}

export default Catalog;
