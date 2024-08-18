"use client";
import { DriverProfileHeader } from "../Layout/DriverProfileHeader";
import { useAuthHook } from "../../hooks/auth.hook";
import { useState, useEffect } from "react";
import { Loader } from "../../common/loader";
import { useAppStore } from "../../store";

export const ProfilePage = () => {
  const { checkFunction } = useAuthHook();
  const [permission, setPermission] = useState();
  const { user } = useAppStore();
  useEffect(() => {
    if (typeof window === "undefined") return;

    checkFunction().then(setPermission);
  }, []);
  if (permission)
    return (
      <div>
        <DriverProfileHeader />

        <div>profile</div>
      </div>
    );

  return <Loader />;
};
