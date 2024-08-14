import axios from "axios";
import { useAppStore } from "../store/index.js";

axios.defaults.baseURL = "http://localhost:4000";

export const useAxios = () => {
  const { setLoading, setError } = useAppStore();
  const fetchData = async (
    url,
    method,
    body,
    headers = {},
    defaultLoader = true,
    error = true,
    withCredentials = true
  ) => {
    try {
      setError(null);
      defaultLoader && setLoading(true);
      const config = {
        method,
        url,
        headers,
        withCredentials,
      };
      if (body) {
        config.data = body;
      }
      const res = await axios(config);
      return res.data;
    } catch (err) {
      if (err.response.status === 401) return unAuthenticated;
      setLoading(false);
      if (err.response && error)
        setError(err.response.data.message || "something went wrong");
      else if (error) setError("something went wrong");
      return false;
    } finally {
      defaultLoader && setLoading(false);
    }
  };

  return { fetchData };
};
