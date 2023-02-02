import styles from "./products.module.scss";
import ProductsCard from "./ProductsCard";
import { Product } from "@/types/Product";
import { use } from "react";

export default function Products() {
  const response = use(fetch("https://fakestoreapi.com/products?limit=10"));

  const products = use<Product[]>(response.json());

  return (
    <div className={styles.root}>
      {products.map(({ category, id, image, title, price, rating }) => (
        <ProductsCard
          category={category}
          key={id}
          image={image}
          price={price}
          title={title}
          rating={rating}
        />
      ))}
    </div>
  );
}
