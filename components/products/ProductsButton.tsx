import styles from "./productsCard.module.scss";

import { useState } from "react";

export default function Products() {
  const [isInCart, setIsInCard] = useState(false);
  const [productCount, setProductCount] = useState(1);

  return (
    <>
      {isInCart ? (
        <button
          onClick={() => setIsInCard(false)}
          className={styles.productsButton}
        >
          В корзине
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsInCard(true)}
            className={styles.productsButtonActive}
          >
            В корзину
          </button>
          <div className={styles.productsButtonControllers}>
            <button
              onClick={() =>
                setProductCount((prev) => (prev > 1 ? --prev : prev))
              }
            >
              -
            </button>
            <span>{productCount}</span>
            <button onClick={() => setProductCount((prev) => ++prev)}>+</button>
          </div>
        </>
      )}
    </>
  );
}
