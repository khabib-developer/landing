import { useAppStore } from "../store";

export const Loader = () => {
  const { loading } = useAppStore();
  if (loading)
    return (
      <div
        style={{ height: "100vh" }}
        className="flex absolute top-0 w-full h-screen items-center justify-center z-50 loader__wrapper"
      >
        <div className="loader"></div>
      </div>
    );
  return <></>;
};
