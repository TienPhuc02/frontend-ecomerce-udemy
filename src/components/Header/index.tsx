import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Col, Input, Row } from "antd";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="min-h-16 w-[100%] shadow-md flex items-center">
      <div className="logo-app pl-3 min-w-[20%]">
        <a className="acss-18u5f3o flex items-center justify-center" href="/">
          <Image
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            height="32"
            width="32"
            alt="logo"
          />
          <span className="ml-1 acss-wehhhl font-semibold text-[20px]">
            Shop IT
          </span>
        </a>
      </div>
      <div className="min-w-[50%]">
        <Input placeholder="Search keyword...." bordered={false} />
      </div>
      <div className="cart-and-auth flex justify-center min-w-[30%] min-h-16 items-center">
        <div className="mr-5 min-w-[30%]">
          <Badge count={0} showZero>
            <Button className="bg-[#1677ff]" type="primary">
              Giỏ Hàng
            </Button>
          </Badge>
        </div>
        <Button className="bg-[#1677ff]" type="primary">
          Đăng Nhập
        </Button>
      </div>
    </div>
  );
};

export default Header;
