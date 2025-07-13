"use client";

import { LogIn, LogOut, Menu, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import Button from "@/components/ui/Button/Button";
import { useAuthStore } from "@/store/auth";

import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => setMenuOpen((prev) => !prev);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/">DummyJSON Shop</Link>
        </div>
        <nav
          className={`${styles.header__nav} ${menuOpen ? styles.header__nav_open : ""}`}
          onClick={handleNavClick}
        >
          <Link href="/about">О нас</Link>
          <Link href="/contacts">Контакты</Link>
          <Link href="/catalog">Каталог</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <div className={styles.header__right}>
          <button
            type="button"
            aria-label="Открыть меню"
            className={styles.header__burger}
            onClick={handleBurgerClick}
          >
            <Menu size={24} />
          </button>
          {user ? (
            <>
              <span className={styles.header__user}>
                <User size={18} className={styles.header__userIcon} />{" "}
                {user.firstName} {user.lastName}
              </span>
              <Button type="button" variant="primary" onClick={logout}>
                <LogOut size={18} /> Выйти
              </Button>
            </>
          ) : (
            <Button
              type="button"
              variant="primary"
              onClick={() => router.push("/login")}
            >
              <LogIn size={18} /> Войти
            </Button>
          )}
        </div>
        {menuOpen && (
          <div
            className={styles.header__overlay}
            onClick={handleBurgerClick}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}
