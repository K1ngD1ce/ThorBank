"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoDesktop from "@/shared/assets/svg/LogoDesktop.svg";
import cls from "@/layouts/Header/ui/Header.module.scss";
import LoginBtn from "@/features/header/ui/LoginBtn";
import SignUpBtn from "@/features/header/ui/SignUpBtn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
  { href: "/security", label: "Security" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={`container ${cls.header__wrapper}`}>
      <header className={cls.header}>
        <Link className={cls.logo__wrapper} href="/">
          <LogoDesktop width="155" height="40" />
        </Link>

        <nav className={cls.header__nav}>
          <ul className={`list__reset ${cls.nav__list}`}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${cls.nav__listLink} ${
                    pathname === href ? cls.active : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cls.header__right}>
          <SignUpBtn />
          <LoginBtn />
        </div>
      </header>
    </div>
  );
}
