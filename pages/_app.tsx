import { AppProps } from "next/app";

import "reset-css";
import "../assets/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
