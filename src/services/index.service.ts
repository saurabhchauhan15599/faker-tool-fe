import Axios, {
  AxiosError,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
  isAxiosError,
} from "axios";

const httpClient = Axios.create({
  baseURL: `http://192.168.101.232:8000/`,
  timeout: 2000 * 10,
  responseType: "json",
});

const handleRequest = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

const handleRequestError = (error: any) => {
  return Promise.reject(error);
};

const handleResponse = (response: AxiosResponse) => {
  const data = response.data;
  return data;
};

const handleResponseError = async (error: any) => {
  if (isAxiosError(error)) {
    return await parseError(error);
  }
  return Promise.reject(error);
};

const getErrorCode = (error: AxiosError) => {
  switch (error.code) {
    case AxiosError.ECONNABORTED:
      alert("Connection timeout");
      break;
    case AxiosError.ERR_NETWORK:
      alert("Service Unavailable");
      break;
    case AxiosError.ERR_CANCELED:
      break;
    default:
      alert("Error");
      break;
  }
  return Promise.reject({
    data: null,
    error: error.message,
  });
};

const parseError = async (error: AxiosError | any) => {
  if (!error.response) return await getErrorCode(error);
  else {
    const statusCode = error.response.status;
    const responseConfig = error.response.config;
    if (statusCode === HttpStatusCode.Unauthorized && !responseConfig._retry) {
      responseConfig._retry = true;
    } else if (
      statusCode === HttpStatusCode.Unauthorized &&
      responseConfig._retry
    ) {
      localStorage.clear();
    }
    return Promise.reject(error.response.data);
  }
};

httpClient.interceptors.request.use(handleRequest, handleRequestError);
httpClient.interceptors.response.use(handleResponse, handleResponseError);

export default httpClient;
