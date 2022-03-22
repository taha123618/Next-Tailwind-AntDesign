import Head from "next/head";
import styles from "../styles/Home.module.css";
import { DatePicker } from "antd";

export default function Home() {
  return (
    <div className="grid mt-5 bg-red-400 rounded p-4 m-4 items-center justify-center">
      <h1>Hello World</h1>
      <h1>Taha Ahmmed</h1>
      <DatePicker />
    </div>
  );
}
