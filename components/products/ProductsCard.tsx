"use client";

import Image from "next/image";
import ProductsButton from "./ProductsButton";
import styles from "./productsCard.module.scss";
import ProductsRate from "./ProductsRate";
import ProductsStar from "./ProductsStar";

interface ProductsCardProps {
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductsCard({
  image,
  category,
  title,
  price,
  rating,
}: ProductsCardProps) {
  const stars = [...Array(5)] as undefined[];

  function declination(number: number, titles: string[]) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  return (
    <div className={styles.productsCard}>
      {rating.count > 300 && (
        <div className={styles.productsHit}>
          <p>Хит</p>
        </div>
      )}
      <Image
        alt={title}
        src={image}
        width={220}
        height={220}
        className={styles.productsImage}
        priority
      />
      <div className={styles.productsInfo}>
        <div className={styles.productsCategoryRates}>
          <h4>{category}</h4>
          <div className={styles.productsRates}>
            {stars.map((_, index) => (
              <ProductsStar
                active={Math.round(rating.rate) >= ++index}
                key={index}
              />
            ))}
            <h4>
              {rating.count}&nbsp;
              {declination(rating.count, ["отзыв", "отзыва", "отзывов"])}
            </h4>
          </div>
        </div>
        <p>{title}</p>
        <p className={styles.productsPrice}>
          {(price * 70).toLocaleString("ru-RU", {
            currency: "RUB",
            style: "currency",
          })}
        </p>
      </div>
      <div className={styles.productsBottom}>
        <ProductsButton />
        <ProductsRate />
      </div>
    </div>
  );
}
