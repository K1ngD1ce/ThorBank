import AuthPromo from "@/widgets/AuthPromo/ui/AuthPromo";
import ProductsTabs from "@/widgets/ProductsTabs/ProductsTabs";

export default function HomePage() {
  return (
    <main className={`main`}>
      <AuthPromo />
      <ProductsTabs />
    </main>
  );
}
