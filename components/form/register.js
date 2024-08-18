"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthHook } from "../../hooks/auth.hook";
import { useAppStore } from "../../store";
import { Loader } from "../../common/loader";
import { useRouter } from "next/router";
export const RegisterForm = ({ login }) => {
  const { error, loading, setError } = useAppStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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

  const { registerFunction } = useAuthHook();

  const userType = watch("user_type");
  if (permission)
    return (
      <div className="w-full flex flex-col  max-w-md m-2 md:m-0">
        <form
          onSubmit={handleSubmit(registerFunction)}
          className="bg-white p-6  shadow-sm bg-white-300  w-full mb-2"
        >
          <h2 className="md:text-2xl text-md font-bold text-center mb-6">
            {" "}
            {login ? "Profilga kirish" : "Ro'yxatdan o'tish"}{" "}
          </h2>

          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              Ism
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", {
                required: "Foydalanuvchi ismi kiritilishi shart",
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.first_name ? "border-orange-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.first_name && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Familiya
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name")}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.last_name ? "border-orange-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
          </div>

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
                  message: "Noto'g'ri format",
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

          {/* Phone Field */}

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefon raqam
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "Telefon raqamni kiritishiz shart",
                pattern: {
                  value: /^(\+998\s|998\s|\(?(9[012345789])\)?\s?)?[\d\s]{9}$/,
                  message: "Noto'g'ri format",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.phone ? "border-orange-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.phone && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* User type */}

          <div className="mb-4">
            <label
              htmlFor="user_type"
              className="block text-sm font-medium text-gray-700"
            >
              Foydalanuvchi turi
            </label>
            <select
              id="user_type"
              {...register("user_type", {
                required: "Foydalanuvchi turi kiritilishi shart",
              })}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.user_type ? "border-orange-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            >
              <option value="">Tanlang...</option>
              <option value="driver">Haydovchi</option>
              <option value="client">Parkovka </option>
            </select>
            {errors.userType && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.user_type.message}
              </p>
            )}
          </div>

          {/* car type Field */}

          {userType === "driver" ? (
            <>
              <div className="mb-4">
                <label
                  htmlFor="car_type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mashina nomi
                </label>
                <input
                  type="text"
                  id="car_type"
                  {...register("car_type", {
                    required:
                      "Foydalanuvchi mashinasining nomi kiritilishi shart",
                  })}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.car_type ? "border-orange-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.car_type && (
                  <p className="text-orange-500 text-sm mt-1">
                    {errors.car_type.message}
                  </p>
                )}
              </div>

              {/* Car color Field */}
              <div className="mb-4">
                <label
                  htmlFor="car_color"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mashina rangi
                </label>
                <input
                  type="text"
                  id="car_color"
                  {...register("car_color", {
                    required:
                      "Foydalanuvchi mashinasining rangi kiritilishi shart",
                  })}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.car_color ? "border-orange-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.car_color && (
                  <p className="text-orange-500 text-sm mt-1">
                    {errors.car_color.message}
                  </p>
                )}
              </div>
            </>
          ) : (
            <></>
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
                  message: "Parol uzunligi 8ta bo'lishi shart",
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
        <div className="" style={{ fontSize: "12px" }}>
          <Link href={login ? "/register" : "/login"} className="block pt-3">
            {login ? "Akkountingiz mavjud emasmi?" : "Ro'yxatdan o'tganmisiz?"}
          </Link>
        </div>
      </div>
    );

  return <Loader />;
};
