import { useCallback } from "react";
import { useAxios } from "./http.hook";
import { useAppStore } from "../store";
import { useRouter } from "next/router";
export const useAuthHook = () => {
  const { setError, setUser } = useAppStore();
  const { fetchData } = useAxios();
  const router = useRouter();
  const loginFunction = useCallback(async (data) => {
    setError(null);
    const result = await fetchData("/login", "POST", data);
    if (!result.response) {
      setError("Parol yoki foydalanuvchi nomi xato");
      return;
    }
    localStorage.setItem("token", result.response.token);
    setUser({
      username: result.response.username,
      email: result.response.email,
    });
    router.push("/profile");
  }, []);

  const registerFunction = useCallback(async (data) => {
    setError(null);
    const result = await fetchData("/register", "POST", data);

    if (!result.response) {
      if (result.error.response.data.email) {
        setError("Bu email ro'yxatdan o'tgan");
      }

      if (result.error.response.data.username) {
        setError("Bu foydalanuvchi nomi ro'yxatdan o'tgan");
      }
      return;
    }
    localStorage.setItem("token", result.response.token);
    setUser({
      username: result.response.user.username,
      email: result.response.user.email,
    });
    router.push("/profile");
  }, []);

  const checkFunction = useCallback(async () => {
    const token = localStorage.getItem("token");
    const result = await fetchData("/check", "POST", { token });
    if (!result.response) return false;
    setUser({
      username: result.response.username,
      email: result.response.email,
    });
    return Boolean(result.response);
  }, []);

  const logoutFunction = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  }, []);

  return { loginFunction, logoutFunction, checkFunction, registerFunction };
};
