import axios from "@/utils/customize";
const callAPIGetAllProduct = (currentPage: number, pageSize: number) => {
  return axios.get(
    `/api/v1/products?currentPage=${currentPage}&pageSize=${pageSize}`
  );
};
export { callAPIGetAllProduct };
