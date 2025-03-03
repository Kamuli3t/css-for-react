import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import products from "./data/products";

function App() {
  return (
    <>
      <h1>Products</h1>

      <div className={styles.products}>
        {products.map((item) => (
          <Product {...item} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
