import { useState } from "react";
import cls from "./tabBar.module.scss";

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
  children: (tab: "individuals" | "businesses") => React.ReactNode;
}

export default function TabBar({ title, tabButton, children }: TabBarProps) {
  const [activeTab, setActiveTab] = useState<"individuals" | "businesses">(
    "individuals"
  );

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
  <div
    className={cls.tabSlider}
    style={{
      transform: activeTab === "individuals" ? "translateX(0)" : "translateX(100%)",
    }}
  />
  <button
    className={`${cls.tabBtn} ${activeTab === "individuals" ? cls.active : ""}`}
    onClick={() => setActiveTab("individuals")}
  >
    {tabButton.btnFirst}
  </button>
  <button
    className={`${cls.tabBtn} ${activeTab === "businesses" ? cls.active : ""}`}
    onClick={() => setActiveTab("businesses")}
  >
    {tabButton.btnSecond}
  </button>
</div>
      </div>

      <div className={cls.tabBar__content}>{children(activeTab)}</div>
    </>
  );
}
