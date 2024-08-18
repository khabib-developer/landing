import axios from "axios";
import { useAppStore } from "../store/index.js";

axios.defaults.baseURL = "/api";

export const useAxios = () => {
  const { setLoading, setError } = useAppStore();
  const fetchData = async (
    url,
    method,
    body,
    headers = {},
    defaultLoader = true,
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
      return { error: null, response: res.data };
    } catch (err) {
      setLoading(false);
      console.log(err);
      return {
        error: err,
        response: null,
      };
    } finally {
      defaultLoader && setLoading(false);
    }
  };

  return { fetchData };
};
