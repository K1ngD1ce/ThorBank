import React from "react";
import Divider from "@/shared/ui/Divider/Divider";
import cls from "./tabBar.module.scss";
import { Product } from "./types";
import { useState } from "react";

interface TabBarProps {
  title: {
    titlePart1: string;
    titlePart2: string;
    descr: string;
  };
  tabButton: {
    btnFirst: string;
    btnSecond: string;
  };
  individuals: Product[];
  businesses: Product[];
}

export interface ProductItem {
  id: number;
  title: string;
  descr: string;
  svg: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function TabBar({
  title,
  tabButton,
  individuals,
  businesses,
}: TabBarProps) {
  const [activeTab, setActiveTab] = useState<"individuals" | "businesses">(
    "individuals"
  );
  const products = activeTab === "individuals" ? individuals : businesses;

  return (
    <>
      <div className={cls.tabBar__wrapper}>
        <div className={cls.tabBar__text}>
          <h2 className="section__title">
            {title.titlePart1} <span>{title.titlePart2}</span>
          </h2>
          <p className={`text`}>{title.descr}</p>
        </div>

        <div className={cls.tabBar__btns}>
          <button
            className={`${cls.tabBtn} ${
              activeTab === "individuals" ? cls.active : ""
            }`}
            onClick={() => setActiveTab("individuals")}
          >
            {tabButton.btnFirst}
          </button>
          <button
            className={`${cls.tabBtn} ${
              activeTab === "businesses" ? cls.active : ""
            }`}
            onClick={() => setActiveTab("businesses")}
          >
            {tabButton.btnSecond}
          </button>
        </div>
      </div>

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
    </>
  );
}
