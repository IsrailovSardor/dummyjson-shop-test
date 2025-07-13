"use client";

import React from "react";

import { useAuthStore } from "@/store/auth";

import styles from "./Footer.module.scss";

export default function Footer() {
  const { user } = useAuthStore();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__sections}>
          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>Категории</h4>
            <ul className={styles.footer__list}>
              <li>
                <a href="/catalog/electronics">Электроника</a>
              </li>
              <li>
                <a href="/catalog/fashion">Мода</a>
              </li>
              <li>
                <a href="/catalog/home">Дом и сад</a>
              </li>
              <li>
                <a href="/catalog/sports">Спорт</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>Информация</h4>
            <ul className={styles.footer__list}>
              <li>
                <a href="/about">О нас</a>
              </li>
              <li>
                <a href="/contacts">Контакты</a>
              </li>
              <li>
                <a href="/faq">Помощь</a>
              </li>
              <li>
                <a href="/terms">Условия использования</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__section}>
            <h4 className={styles.footer__title}>Мы в соцсетях</h4>
            <ul className={styles.footer__socials}>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://vk.com" target="_blank" rel="noreferrer">
                  VK
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <span>©{year} DummyJSON Shop</span>
          {user && (
            <span>
              {" "}
              — Logged as
              {user.email}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
