import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={[roboto.className, styles.container].join(" ")}>
      <Component {...pageProps} />
    </main>
  );
}
