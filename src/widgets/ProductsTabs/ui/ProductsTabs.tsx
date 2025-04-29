"use client";

import { useEffect, useState } from "react";
import cls from "./ProductsTabs.module.scss";
import { TabBar } from "@/shared/ui/TabBar";
import { fetchProducts } from "@/shared/api/productApi";

interface Product {
  title: string;
  descr: string;
  svg: string;
}

export default function ProductsTabs() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProds = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProds();
  }, []);

  if (loading) {
    return <div className={cls.sceleton}>Загрузка</div>;
  }

  return (
    <section className={cls.productsTabs}>
      <div className="container">
        <TabBar products={products} />
      </div>
    </section>
  );
}
