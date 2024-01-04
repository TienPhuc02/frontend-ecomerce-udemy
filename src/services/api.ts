import axios from "@/utils/customize";
const callAPIGetAllProduct = () => {
  return axios.get("/api/v1/products");
};
export { callAPIGetAllProduct };
