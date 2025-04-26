"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

  const navRef = useRef<HTMLUListElement>(null);
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      `.${cls.nav__listLink}.${cls.active}`
    );
    const containerRect = navRef.current?.getBoundingClientRect();

    if (activeLink && containerRect) {
      const linkRect = (activeLink as HTMLElement).getBoundingClientRect();

      setBgStyle({
        left: linkRect.left - containerRect.left,
        top: linkRect.top - containerRect.top,
        width: linkRect.width,
        height: linkRect.height,
      });
    }
  }, [pathname]);

  return (
    <div className={`container ${cls.header__wrapper}`}>
      <header className={cls.header}>
        <Link className={cls.logo__wrapper} href="/">
          <LogoDesktop width="155" height="40" />
        </Link>

        <nav className={cls.header__nav}>
          <ul ref={navRef} className={`list__reset ${cls.nav__list}`}>
            <motion.div
              className={cls.nav__switcher}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={bgStyle}
            />

            {navLinks.map(({ href, label }) => (
              <li key={href} className={cls.nav__item}>
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
