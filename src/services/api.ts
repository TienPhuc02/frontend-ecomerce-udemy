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
