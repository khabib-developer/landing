import React from "react";
import { useAuthHook } from "../../hooks/auth.hook";

export const DriverProfileHeader = () => {
  const { logoutFunction } = useAuthHook();
  return (
    <header className="bg-white-500 shadow-lg py-3 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-black-600">Profile</h2>
        </div>
        <button
          onClick={logoutFunction}
          className="px-4 py-1 bg-orange-500 text-white-500 rounded-lg shadow-orange-md hover:shadow-xl"
        >
          Logout
        </button>
      </div>
    </header>
  );
};
