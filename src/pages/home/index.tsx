import AuthPromo from "@/widgets/AuthPromo/ui/AuthPromo";
import { Transactions } from "@/widgets/Transactions/";

export default function HomePage() {
  return (
    <main className={`main`}>
      <section className="pt-[50px] pb-[75px]">
        <div className={`container flex justify-between gap-20`}>
          <AuthPromo />
          <Transactions />
        </div>
      </section>
    </main>
  );
}
