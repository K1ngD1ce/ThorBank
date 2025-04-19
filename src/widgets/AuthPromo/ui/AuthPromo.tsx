import OpenAccount from "@/features/intro/ui/OpenAccount";
import cls from "./authPromo.module.scss";
import Check from "@/shared/assets/svg/checkWithBackground.svg";

export default function AuthPromo() {
  return (
    <div className={cls.authPromo}>
      <div className={cls.authPromo__requiments}>
        <Check width={24} height={24} />
        <span>No LLC Required, No Credit Check.</span>
      </div>
      <div className={cls.authPromo__text}>
        <h2 className={`section__title`}>
          Welcome to YourBank Empowering Your <span>Financial Journey</span>
        </h2>

        <div className={cls.authPromo__descr}>
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers needs.
        </div>
      </div>
      <OpenAccount />
    </div>
  );
}
