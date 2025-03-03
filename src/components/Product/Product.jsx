import styles from "./Product.module.css";
function Product({ name, price, category, inStock, id }) {
  return (
    <div>
      <div className={styles.head}>
        <h2>{name}</h2>
        <h3 className={styles.price}>Price ${price} </h3>
      </div>
      <div className={styles.body}>
        <h4 className={styles.cta}>{inStock ? "Buy Now" : "Out of Stock"}</h4>
        <h5>{category}</h5>
        <h5>Product UPC {id}</h5>
      </div>
    </div>
  );
}

export default Product;
