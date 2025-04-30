import AuthPromo from "@/widgets/AuthPromo/ui/AuthPromo";
import ProductsTabs from "@/widgets/ProductsTabs/ui/ProductsTabs";
import UseCases from "@/widgets/UseCases/ui/UseCases";

export default function HomePage() {
  return (
    <main className={`main`}>
      <AuthPromo />
      <ProductsTabs />
      <UseCases/>
    </main>
  );
}
