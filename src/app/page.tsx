import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Components/NavBar";
import clsx from "clsx";
import { coiny } from "./Config/font";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <h1 className={clsx("font-bold", coiny.variable)}>Hello World</h1>
    </main>
  );
}
