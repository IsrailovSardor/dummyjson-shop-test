import ProductsList from "@/components/ProductsList/ProductsList";
import { getProducts } from "@/lib/api";

import styles from "./page.module.scss";

async function getProductsServer() {
  try {
    const products = await getProducts(12);
    return products || [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProductsServer();

  return (
    <div className={styles.mainPage}>
      <h1 className={styles.mainPage__title}>Каталог товаров</h1>
      <ProductsList products={products} />
    </div>
  );
}
