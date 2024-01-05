"use client";
import React from "react";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import { callAPILoginUser } from "@/services/api";
import { useRouter } from "next/navigation";

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
    //   router.push("/");
    }
    console.log("Success:", values);
  };
  return (
    <Form
      className="mx-auto border border-spacing-1 shadow-md p-3 rounded-xl"
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
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

      <Form.Item<FieldType>
        name="remember"
        labelCol={{ span: 12 }}
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item labelCol={{ span: 24 }} wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
