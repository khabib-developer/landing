"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthHook } from "../../hooks/auth.hook";
import { useAppStore } from "../../store";
import { Loader } from "../../common/loader";
import { useRouter } from "next/router";
export const LoginForm = ({ login }) => {
  const { error, loading, setError } = useAppStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { checkFunction } = useAuthHook();
  const router = useRouter();

  const [permission, setPermission] = useState(false);

  useEffect(() => {
    if (window === "undefined") return;

    checkFunction().then((res) => {
      if (res) {
        router.push("/profile");
      }
      setPermission(true);
    });
  }, []);

  const { loginFunction } = useAuthHook();

  if (permission)
    return (
      <div className="w-full flex flex-col  max-w-md ">
        <form
          onSubmit={handleSubmit(loginFunction)}
          className="bg-white p-6  shadow-sm bg-white-300  w-full mb-2"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            {" "}
            {login ? "Profilga kirish" : "Ro'yxatdan o'tish"}{" "}
          </h2>

          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Foydalanuvchi nomi
            </label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "Foydalanuvchi nomi kiritilishi shart",
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.username ? "border-orange-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.username && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          {!login && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email kiritilishi shart",
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-orange-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.email && (
                <p className="text-orange-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Parol
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Parol kiritilishi shart",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.password ? "border-orange-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.password && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <p className="text-orange-500 text-sm my-1">{error}</p>}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white-500 bg-black-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Yuborilmoqda..." : "Yuborish"}
            </button>
          </div>
        </form>
        <div className="w-">
          <Link
            href={login ? "/register" : "/login"}
            className="text-xs block pt-3"
          >
            {login ? "Akkountingiz mavjud emasmi?" : "Ro'yxatdan o'tganmisiz?"}
          </Link>
        </div>
      </div>
    );

  return <Loader />;
};
