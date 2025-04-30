"use client";
import React from "react";
import cls from "./UseCases.module.scss";
import { fetchCases, iconMap } from "@/shared/api/casesApi";
import { useState, useEffect } from "react";
import { CasesData } from "../type";
import BgCards from "@/shared/assets/svg/background2.svg";
import { StatItem } from "@/shared/ui/StatItem/StatItem";


export default function UseCases() {
  const [data, setData] = useState<CasesData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProds = async () => {
      try {
        const fetchedData = await fetchCases();
        console.log("Зашружаем данные:", fetchedData); // Логируем полученные данные

        const processedIndividuals = fetchedData.individuals.map((item) => ({
          ...item,
          Icon: iconMap[item.svg],
        }));

        const processedBusinesses = fetchedData.business.map((item) => ({
          ...item,
          Icon: iconMap[item.svg],
        }));

        setData({
          individuals: processedIndividuals,
          business: processedBusinesses,
        });

        console.log("Данные загружены:", fetchedData);
      } catch (error) {
        console.error(`Ошибка получения данных о продуктах - ${error}`);
      } finally {
        setLoading(false);
      }
    };

    loadProds();
  }, []);

  if (loading || !data) {
    return (
      <div className="container">
        <div className={cls.sceleton}>Loading...</div>
      </div>
    );
  }

  return (
    <section className={cls.useCases}>
      <div className="container">
        <h2 className={`${cls.useCases__title} section__title`}>
          <span>Use Cases</span>
        </h2>
        <p className={`${cls.useCases__descr} text`}>
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>

        <div className={cls.useCases__wrapper}>
          <div className={cls.useCases__forIndividuals}>
            <div className={cls.useCases__cards}>
              <BgCards
                width={224}
                height={213}
                className={cls.bgCardsIndividuals}
              />
              {data.individuals[0].cards.map((card, index) => {
                const Icon = iconMap[card.svg];
                return (
                  <div key={index} className={cls.useCases__card}>
                    <div className={`svg__wrapper ${cls.svg__wrapper}`}>
                      <div
                        className={`icon__backgroundFirst ${cls.icon__backgroundFirst}`}
                      >
                        <div
                          className={`icon__backgroundSec ${cls.icon__backgroundSec}`}
                        >
                          {Icon && <Icon width={30} height={30} />}
                        </div>
                      </div>
                    </div>
                    <span>{card.name}</span>
                  </div>
                );
              })}
            </div>
            <div className={cls.useCases__info}>
              <div className={cls.info__text}>
                <span>{data.individuals[0].title}</span>
                <p className="text">{data.individuals[0].text}</p>
              </div>
              <ul>
                {data.business[0].stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    percent={stat.percent}
                    text={stat.text}
                    showDivider={index < data.business[0].stats.length - 1}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className={cls.useCases__forBusiness}>
            <div className={cls.useCases__info}>
              <div className={cls.info__text}>
                <span>{data.individuals[0].title}</span>
                <p className="text">{data.individuals[0].text}</p>
              </div>
              <ul>
                {data.business[0].stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    percent={stat.percent}
                    text={stat.text}
                    showDivider={index < data.business[0].stats.length - 1}
                  />
                ))}
              </ul>
            </div>
            <div className={cls.useCases__cards}>
              <BgCards
                width={224}
                height={213}
                className={cls.bgCardsBusiness}
              />
              {data.business[0].cards.map((card, index) => {
                const Icon = iconMap[card.svg];
                return (
                  <div key={index} className={cls.useCases__card}>
                    <div className={`svg__wrapper ${cls.svg__wrapper}`}>
                      <div
                        className={`icon__backgroundFirst ${cls.icon__backgroundFirst}`}
                      >
                        <div
                          className={`icon__backgroundSec ${cls.icon__backgroundSec}`}
                        >
                          {Icon && <Icon width={30} height={30} />}
                        </div>
                      </div>
                    </div>
                    <span>{card.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
