"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { loginRequest } from "@/lib/api";
import { useAsync } from "@/lib/useAsync";
import { useAuthStore } from "@/store/auth";
import type { User } from "@/types/api";

import styles from "./LoginForm.module.scss";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, execute } = useAsync<User, [string, string]>(
    async (username, password) => {
      const user = await loginRequest(username, password);
      login(user);
      router.replace("/");
      return user;
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    execute(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2 className={styles.loginForm__title}>Авторизация</h2>

      <Input
        label="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username"
        error={error && username.length < 3 ? "Минимум 3 символа" : ""}
        disabled={loading}
      />

      <Input
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        error={error && password.length < 3 ? "Минимум 3 символа" : ""}
        disabled={loading}
      />

      {error && <div className={styles.loginForm__error}>{error}</div>}

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
}
