import Link from "next/link";
import LogoDesktop from "@/shared/assets/svg/LogoDesktop.svg";
import cls from "@/widgets/Header/styles/header.module.scss";

export default function Header() {
  return (
    <div className={`container ${cls.header__wrapper}`}>
      <header className={cls.header}>
        <Link className={cls.logo__wrapper} href="/">
          <LogoDesktop width="155" height="40" />
        </Link>

        <nav className={cls.header__nav}>
          <ul className={`list__reset ${cls.nav__list}`}>
            <li className={cls.active}>
              <Link className={cls.nav__listLink} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={cls.nav__listLink} href="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className={cls.nav__listLink} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={cls.nav__listLink} href="/security">
                Security
              </Link>
            </li>
          </ul>
        </nav>

        <div className={cls.header__right}>
          <button className={`${cls.login__btn} ${cls.signUp__btn}`}>
            Sign up
          </button>
          <button className={`${cls.login__btn} ${cls.login__btn}`}>
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
