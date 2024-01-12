import queryString from "query-string";
import axios from "@/utils/customize";
export const callAPIGetAllProduct = (currentPage: number, pageSize: number) => {
  return axios.get(
    `/api/v1/products?currentPage=${currentPage}&pageSize=${pageSize}`
  );
};
export const callAPILoginUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axios.post(`/api/v1/login`, { email, password });
};
export const callAPISignUpUser = ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  return axios.post(`/api/v1/register`, { name, email, password });
};
export const refreshLogin = () => {
  return axios.get(`/api/v1/refresh`);
};

export const sendRequest = async <T>(props: IRequest) => {
  let {
    url,
    method,
    body,
    queryParams = {},
    useCredentials = false,
    headers = {},
    nextOption = {},
  } = props;

  const options: any = {
    method: method,
    // by default setting the content-type to be json type
    headers: new Headers({ "content-type": "application/json", ...headers }),
    body: body ? JSON.stringify(body) : null,
    ...nextOption,
  };
  if (useCredentials) options.credentials = "include";

  if (queryParams) {
    url = `${url}?${queryString.stringify(queryParams)}`;
  }

  return fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json() as T; //generic
    } else {
      return res.json().then(function (json) {
        // to be able to access error status when you catch the error
        return {
          statusCode: res.status,
          message: json?.message ?? "",
          error: json?.error ?? "",
        } as T;
      });
    }
  });
};
