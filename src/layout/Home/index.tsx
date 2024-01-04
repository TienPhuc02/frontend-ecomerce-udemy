"use client";
import { setProducts } from "@/lib/features/product/productSlice";
import { RootState } from "@/lib/store";
import { callAPIGetAllProduct } from "@/services/api";
import { Button, Card, Image, Rate, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const [listProducts, setListProducts] = useState<IProduct[]>([]);
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    const res: IBackendRes<IDataBackendRes> = await callAPIGetAllProduct();
    if (res && res.data) {
      dispatch(setProducts(res.data.products));
      setListProducts(res.data.products);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
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
                          src={product.images[1].url}
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
      </div>
    </div>
  );
};

export default HomePage;
