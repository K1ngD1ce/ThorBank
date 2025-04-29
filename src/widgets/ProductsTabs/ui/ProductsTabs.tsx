"use client";

import { useEffect, useState } from "react";
import cls from "./ProductsTabs.module.scss";
import { TabBar } from "@/shared/ui/TabBar";
import { fetchProducts, iconMap } from "@/shared/api/productApi";
import { ProductData } from "@/shared/ui/TabBar/types";

export default function ProductsTabs() {
  const [data, setData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProds = async () => {
      try {
        const fetchedData = await fetchProducts();

        // Добавляем Icon компонент к каждому продукту до сохранения в state
        const processedIndividuals = fetchedData.individuals.map((item) => ({
          ...item,
          Icon: iconMap[item.svg],
        }));

        const processedBusinesses = fetchedData.businesses.map((item) => ({
          ...item,
          Icon: iconMap[item.svg],
        }));

        setData({
          ...fetchedData,
          individuals: processedIndividuals,
          businesses: processedBusinesses,
        });
      } catch (error) {
        console.error(`Ошибка получения данных о продуктах - ${error}`);
      } finally {
        setLoading(false);
      }
    };

    loadProds();
  }, []);

  if (loading || !data) {
    return <div className={cls.sceleton}>Загрузка</div>;
  }

  return (
    <section className={cls.productsTabs}>
      <div className="container">
        <TabBar
          title={data.title}
          tabButton={data.tabButton}
          individuals={data.individuals}
          businesses={data.businesses}
        />
      </div>
    </section>
  );
}
