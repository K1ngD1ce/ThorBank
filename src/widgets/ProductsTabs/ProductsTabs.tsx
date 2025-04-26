import cls from "./ProductsTabs.module.scss";
import { TabBar } from "@/shared/ui/TabBar";

export default function ProductsTabs() {
  return (
    <section className={cls.productsTabs}>
      <div className="container">
        <TabBar />
      </div>
    </section>
  );
}
