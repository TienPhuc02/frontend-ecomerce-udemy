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
