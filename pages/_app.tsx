import { UserProvider } from "@/context/UserProvider";
import "@/styles/fonts.css";
import { GlogalStyle } from "@/styles/GlogalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <GlogalStyle />
      <Component {...pageProps} />
    </UserProvider>
  );
}
