import cls from "./BackgroundElement.module.scss";
import Image from "next/image";

export default function BackgroundElement() {
  return (
    <Image
      className={cls.background__dots}
      src="/assets/images/backgroundHero.svg"
      alt="dots grid"
      width={546}
      height={440}
      priority
    />
  );
}
