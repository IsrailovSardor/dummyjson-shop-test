"use client";

import React from "react";

import ProductCard from "@/components/ProductCard/ProductCard";
import { useAuthStore } from "@/store/auth";
import { Product } from "@/types/api";

import styles from "./ProductsList.module.scss";

export interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  const { user } = useAuthStore();

  if (!products.length) {
    return <div className={styles.productsList__empty}>Нет товаров</div>;
  }

  return (
    <div className={styles.productsList__grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} isAuth={!!user} />
      ))}
    </div>
  );
}
