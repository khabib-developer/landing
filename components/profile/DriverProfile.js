"use client";
import { DriverProfileHeader } from "../Layout/DriverProfileHeader";
import { useAuthHook } from "../../hooks/auth.hook";
import { useState, useEffect } from "react/cjs/react.development";
import { Loader } from "../../common/loader";

export const DriverProfile = () => {
  const { checkFunction } = useAuthHook();
  const [permission, setPermission] = useState();
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
