import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
