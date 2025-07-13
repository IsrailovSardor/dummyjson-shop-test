import React from "react";

import Button from "@/components/ui/Button/Button";
import { Product } from "@/types/api";

import styles from "./ProductCard.module.scss";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  isAuth: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isAuth }) => (
  <div className={styles.productCard}>
    <Image
      src={product.thumbnail}
      alt={product.title}
      width={100}
      height={100}
      className={styles.productCard__image}
    />
    <div className={styles.productCard__info}>
      <h3 className={styles.productCard__name}>{product.title}</h3>
      <p className={styles.productCard__category}>{product.category}</p>
      <div className={styles.productCard__footer}>
        <span className={styles.productCard__price}>{product.price} $</span>
        {isAuth && <Button variant="primary">Add to cart</Button>}
      </div>
    </div>
  </div>
);

export default ProductCard;
