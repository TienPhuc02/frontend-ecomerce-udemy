"use client";
import { useAppSelector } from "@/lib/hooks";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Col, Dropdown, Input, Row, Space } from "antd";
import { MenuProps } from "antd/lib";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const items: MenuProps["items"] = [
  {
    label: <a href="/">Profile</a>,
    key: "0",
  },
  {
    label: <a href="/">Order</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <a href="/">Log out</a>,
    key: "3",
  },
];
const Header = () => {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const user = useAppSelector((state) => state.user.user);
  console.log("🚀 ~ HomePage ~ user:", isAuthenticated);

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
            <Button className="text-[#1677ff] ">Giỏ Hàng</Button>
          </Badge>
        </div>
        {isAuthenticated === true ? (
          <div className="flex items-center gap-3">
            {user.avatar.url ? (
              <Avatar size={32} src={user.avatar.url} icon={<UserOutlined />} />
            ) : (
              <Avatar size={32} icon={<UserOutlined />} />
            )}
            <Dropdown
              className="cursor-pointer "
              menu={{ items }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hi I&apos;m {user.name}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        ) : (
          <Button
            onClick={() => router.push("/login")}
            className="bg-[#1677ff] "
            type="primary"
          >
            Đăng Nhập
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
