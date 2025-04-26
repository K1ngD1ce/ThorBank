import cls from "./tabBar.module.scss";

export default function TabBar() {
  return (
    <>
      <div className={cls.tabBar__wrapper}>
        <h2 className="section__title">
          Our <span>Products</span>
        </h2>

        <div className="tabBar__btn">кнопка</div>
      </div>
      <div className="tabBar__content">контент</div>
    </>
  );
}
