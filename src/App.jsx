import "./App.css";
import Footer from "./components/Footer";
import Product from "./components/Product/Product";
import products from "./data/products";

function App() {
  return (
    <>
      <h1>Products</h1>

      <div>
        {products.map((item) => (
          <Product {...item} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
