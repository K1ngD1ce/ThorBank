"use client";
import React from "react";
import { useEffect, useState } from "react";
import cls from "./ProductsTabs.module.scss";
import { TabBar } from "@/shared/ui/TabBar";
import { fetchProducts, iconMap } from "@/shared/api/productApi";
import { ProductData } from "@/shared/ui/TabBar/types";
import Divider from "@/shared/ui/Divider/Divider";

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
      <TabBar title={data.title} tabButton={data.tabButton}>
          {(activeTab) => {
            const products =
              activeTab === "individuals"
                ? data.individuals
                : data.businesses;

            return (
              <div className={cls.tabBar__content}>
                {products.map((product, index) => {
                  const Icon = product.Icon;

                  return (
                    <React.Fragment key={product.id}>
                      <div className={cls.tabBar__contentCard}>
                        <div className={cls.svg__wrapper}>
                          <div className={cls.icon__backgroundFirst}>
                            <div className={cls.icon__backgroundSec}>
                              {Icon && <Icon width={34} height={34} />}
                            </div>
                          </div>
                        </div>
                        <div className={cls.card__title}>{product.title}</div>
                        <div className={`text ${cls.card__descr}`}>{product.descr}</div>
                      </div>
                      {index < products.length - 1 && <Divider />}
                    </React.Fragment>
                  );
                })}
              </div>
            );
          }}
        </TabBar>
      </div>
    </section>
  );
}
