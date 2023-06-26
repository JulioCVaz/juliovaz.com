import "@/styles/main.module.scss";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import variables from "@/styles/_variables.module.scss";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} className={variables} />
    </main>
  );
}
