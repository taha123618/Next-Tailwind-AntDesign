import Head from "next/head";
import styles from "../styles/Home.module.css";
import { DatePicker, Button, Form, Input, Checkbox, Carousel } from "antd";
import Divider from "./divider";

export default function Home() {
  const Click = () => {
    console.log("click");
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    <Divider />
    <div className="grid mt-5 items-center justify-center">
      <Carousel autoplay>
        <div
          className="text-black"
          style={{
            height: "160px",
            color: "#000",
            lineHeight: "160px",
            textAlign: "center",
            background: "green",
          }}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </div>
      </Carousel>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input username",
            },
          ]}
        >
          <Input />
          <br />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input  password!",
            },
          ]}
        >
          <Input.Password />
          <br />
        </Form.Item>

        <Form.Item
          name="datepicker"
          valuePropName="datepicker"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <DatePicker
            rules={[
              {
                required: true,
                message: "Please select date",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="danger"
            htmlType="submit"
            className="text-black hover:text-green"
            onClick={Click}
          >
            Press me
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  );
}
