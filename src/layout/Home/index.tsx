"use client";
import { setProducts } from "@/lib/features/product/productSlice";
import type { PaginationProps } from "antd";
import { callAPIGetAllProduct, refreshLogin } from "@/services/api";
import { Button, Card, Image, Pagination, Rate, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
import { setAuthenticated } from "@/lib/features/user/userSlice";
const HomePage = () => {
  const [listProducts, setListProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [totalProducts, setTotalProducts] = useState(0);
  const user = useAppSelector((state) => state.user);

  console.log("🚀 ~ HomePage ~ user:", user);
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    currentPage,
    pageSize
  ) => {
    console.log(currentPage, pageSize);
  };
  const onChange: PaginationProps["onChange"] = (page, pageSize) => {
    console.log(page);
    console.log(pageSize);
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    const res: IBackendRes<IDataBackendRes> = await callAPIGetAllProduct(
      currentPage,
      pageSize
    );
    if (res && res.data) {
      dispatch(setProducts(res.data.products));
      setListProducts(res.data.products);
      setTotalProducts(res.data.filteredProductCount);
    }
  };
  const getRefreshLogin = async () => {
    const res = await refreshLogin();
    console.log("🚀 ~ getRefreshLogin ~ res:", res);
    dispatch(setAuthenticated(res.data));
    if (res && res.data) {
      // dispatch(setAuthenticated())
    }
  };
  useEffect(() => {
    getAllProduct();
    if (localStorage.getItem("access_token") !== "") {
      getRefreshLogin();
    }
  }, [currentPage, pageSize]);
  return (
    <div>
      <div className="min-h-[600px] mx-auto max-w-[1000px] py-5">
        <div className="text-[30px] mb-5">Danh Sách Sản Phẩm</div>
        <div className="list-product">
          {listProducts.length === 0 ? (
            <Spin size="large" className="mt-5" />
          ) : (
            <div className="grid grid-cols-4 gap-4 ">
              {listProducts.map((product) => {
                return (
                  <div key={product._id}>
                    <Card hoverable>
                      <div className="item-product min-h-[300px] ">
                        <Image
                          height={100}
                          width={"100%"}
                          src={product?.images[1]?.url}
                          alt="Image Product"
                        />
                        <p className="mb-2 min-h-[70px]">{product.name}</p>
                        <div className="rating-num-of-review flex">
                          <Rate
                            disabled
                            defaultValue={product.ratings}
                            className="mr-2"
                          />
                          <p>({product.numOfReview})</p>
                        </div>
                        <p className="text-[25px] mt-2 font-medium">
                          ${product.price}
                        </p>
                        <Button
                          className=" w-full "
                          shape="round"
                          size={"large"}
                        >
                          Xem chi tiết sản phẩm
                        </Button>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="pagination-list-products mt-7 text-center">
          <Pagination
            total={totalProducts}
            current={currentPage}
            pageSize={pageSize}
            showSizeChanger
            showQuickJumper
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            onChange={onChange}
            pageSizeOptions={[4, 8, 10]}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
