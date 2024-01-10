"use client";
import React from "react";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import { callAPILoginUser } from "@/services/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginPage: React.FC = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    const res = await callAPILoginUser({
      email: values.email,
      password: values.password,
    });
    if (res) {
      console.log(res);
      message.success(res.data.message);
      router.push("/");
    }
    console.log("Success:", values);
  };
  const handleClickRegisterNow = () => {
    router.push("/signup");
  };
  return (
    <Form
      className="mx-auto border border-spacing-1 shadow-md p-3 rounded-xl"
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot mr-3 text-[#167fff]" href="">
            Forgot password
          </a>
        </div>
      </Form.Item>

      <Form.Item>
        <div className="flex justify-between">
          <Button
            htmlType="submit"
            className="login-form-button mr-3 bg-[#167fff]"
            type="primary"
          >
            Log in
          </Button>
          <a
            className="text-[#167fff]"
            // href="/signup"
            onClick={handleClickRegisterNow}
          >
            Register now!
          </a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
