"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { callAPISignUpUser } from "@/services/api";
import { useRouter } from "next/navigation";
type IValuesFormRegister = {
  name: string;
  email: string;
  password: string;
};

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  remember?: string;
};

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const onFinish = async (values: IValuesFormRegister) => {
    const res = await callAPISignUpUser({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    if (res && res.data) {
      router.push("/login");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        label="Name"
        name="name"
        rules={[
          { required: true, message: "Please input your Name!" },
          { max: 50, message: "Your name can't exceed 50 characters" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 6, message: "Your Password must be longer than 6 characters" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-between">
          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ span: 24 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot mr-3 text-[#167fff]" href="/login">
            You have account?
          </a>
        </div>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" className="bg-[#167fff]" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterPage;
